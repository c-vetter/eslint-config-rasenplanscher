import { resolve } from 'path'
import { spawn } from 'child_process'

import test, { ExecutionContext } from 'ava'
import { copy, readdir, readFile } from 'fs-extra'
import ora from 'ora'
import readdirp from 'readdirp'
import { root } from '../support/paths'

type Then<T> = T extends PromiseLike<infer U> ? U : T

type Paths = Then<ReturnType<typeof prepare>>

const troot = (...s:string[]) => resolve(__dirname, ...s)
const sroot = (r:string) => (d:string) => (...s:string[]) => troot(r, d, ...s)

//

// Lets AVA know that something is still working, thereby preventing timeout
const spinner = ora({
	interval: 1000,
	isEnabled: true,
	spinner: `clock`,
}).start(`bootstrapping`)

//

readdir(troot(), { withFileTypes: true })
.then(entries => {
	spinner.text = `preparing scenarios`
	return entries
})
.then(entries => Promise.all(
	entries
	.filter(entry => entry.isDirectory())
	.map(dir => prepare(dir.name)),
))
.then(scenarios => {
	spinner.text = `running scenarios`
	return scenarios
})
.then(scenarios => Promise.all(
	scenarios.map(s => new Promise<void>(
		(resolve, reject) => test(
			`scenario: ${s.name}`,
			async t => {
				await npm(
					`test`,
					s.result(),
				)

				return checkFiles(t, s).then(resolve, reject)
			},
		),
	)),
))
.catch(console.error)
.finally(() => spinner.info(`done`))

async function prepare (name: string) {
	const root = sroot(name)
	const source = root(`src`)
	const control = root(`ctrl`)
	const result = root(`run`)

	await copy(source(), result())

	await npm(
		`install`,
		result(),
	)

	return {
		name,
		root,
		source,
		control,
		result,
	}
}

function checkFiles (t: ExecutionContext, paths: Paths) {
	const { control, result } = paths

	return Promise.all([
		readdirp.promise(result(), {
			directoryFilter: [`!node_modules`],
			fileFilter: [
				`!package.json`,
				`!package-lock.json`,
				`!.eslintrc.*`,
			],
		}),
		readdirp.promise(control()),
	])
	.then(entries => entries.map(entry => entry.map(({ path }) => path)))
	.then(([ result, ctrl ]) => {
		// all expected files are there
		ctrl.forEach(p => t.true(result.includes(p), `missing file ${p}`))

		// no unexpected files
		result.forEach(p => t.true(ctrl.includes(p), `unexpected file ${p}`))

		return result
	})
	.then(commonPaths => Promise.all(
		commonPaths
		.map(async p => (
			t.is(
				(await readFile(control(p))).toString(),
				(
					(await readFile(result(p)))
					.toString()
					.replace(new RegExp(root().replace(/\\/g, `\\\\`), `g`), `@project@`)
					.replace(/\\/g, `/`)
				),
				`aberration in ${p}`,
			)
		)),
	))
	.then(()=>{})
}

function npm (cmd:string, cwd:string) {
	return new Promise((resolve, reject) => {
		const runner = spawn(
			`npm.cmd`,
			[ cmd ],
			{ cwd },
		)

		runner.on(`error`, error => reject(error))

		runner.on(`exit`, (code, signal) => resolve({
			code,
			signal,
		}))
	})
}
