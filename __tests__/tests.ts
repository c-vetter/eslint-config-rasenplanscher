import { resolve as resolvePath } from 'path'
import { spawn } from 'child_process'

import test, { ExecutionContext } from 'ava'
import { copy, emptyDir, pathExists, readdir, readFile, readJson, symlink } from 'fs-extra'
import ora from 'ora'
import readdirp from 'readdirp'

type Then<T> = T extends PromiseLike<infer U> ? U : T

type Paths = Then<ReturnType<typeof prepare>>

const tmp = process.env.TMP ?? process.env.TEMP ?? `/tmp`
const testResults = `__test-results__`

// d* = path helper, “directory”, multiple `d`s for intermediate directory levels
const dTests = (...segments:Array<string>) => resolvePath(__dirname, ...segments)
const dRepo = (...segments:Array<string>) => dTests(`..`, ...segments)
const dPackage = (...segments: Array<string>): string => dRepo(`__pkg__`, ...segments)
const dddTest = (
	(scenario:string) =>
	(directory:string) => // eslint-disable-line @typescript-eslint/indent
	(...segments:Array<string>) => // eslint-disable-line @typescript-eslint/indent
	dTests(scenario, directory, ...segments) // eslint-disable-line @typescript-eslint/indent
)
const ddTmp = (
	(scenario:string) =>
	(...segments:Array<string>) => // eslint-disable-line @typescript-eslint/indent
	resolvePath(tmp, `__eslint-config-rasenplanscher__tests__`, scenario, ...segments) // eslint-disable-line @typescript-eslint/indent
)

//

// Lets AVA know that something is still working, thereby preventing timeout
const spinner = ora({
	interval: 1000,
	isEnabled: true,
	spinner: `clock`,
}).start(`bootstrapping`)

//

emptyDir(dPackage())
.then(() => readJson(dRepo(`package.json`)))
.then(({ files }:{ files:Array<string> }) => (
	Promise.all(
		[
			`package.json`,
			`package-lock.json`,
			...files,
		]
		.map((file) => copy(dRepo(file), dPackage(file))),
	)
))
// .then(() => npm(`install`, dPackage(), `--production`))
.then(() => readdir(dTests(), { withFileTypes: true }))
.then((entries) => {
	spinner.text = `preparing scenarios`
	return entries
})
.then((entries) => Promise.all(
	entries
	.filter((entry) => entry.isDirectory())
	.map((dir) => prepare(dir.name)),
))
.then((scenarios) => {
	spinner.text = `running scenarios`

	const resultView = dRepo(testResults)
	pathExists(resultView).then((exists) => {
		if (exists) return

		symlink(ddTmp(`.`)(), resultView, `junction`)
	})

	return scenarios
})
.then((scenarios) => Promise.all(
	scenarios.map((s) => new Promise<void>(
		(resolve, reject) => test(
			`scenario: ${s.name}`,
			async (t) => {
				await npm(
					`test`,
					s.dResult(),
				)

				return checkFiles(t, s).then(resolve, reject)
			},
		),
	)),
))
.catch(console.error)
.finally(() => spinner.info(`done`))

//

async function prepare (name: string) {
	const ddRoot = dddTest(name)
	const dSource = ddRoot(`src`)
	const dControl = ddRoot(`ctrl`)
	const dResult = ddTmp(name)

	await emptyDir(dResult())
	await copy(dSource(), dResult())
	// without this, the package does not work as part of the test repo
	await copy(dPackage(), dResult(`__pkg__`))
	await npm(`install`, dResult())

	return {
		name,
		ddRoot,
		dSource,
		dControl,
		dResult,
	}
}

function checkFiles (t: ExecutionContext, paths: Paths) {
	const { dControl, dResult } = paths

	return Promise.all([
		readdirp.promise(dResult(), {
			directoryFilter: [
				`!__pkg__`,
				`!node_modules`,
			],
			fileFilter: [
				`!package.json`,
				`!package-lock.json`,
				`!.eslintrc.*`,
			],
		}),
		readdirp.promise(dControl()),
	])
	.then((entries) => entries.map((entry) => entry.map(({ path }) => path)))
	.then(([ result, control ]) => {
		// all expected files are there
		control.forEach((p) => t.true(result.includes(p), `missing file ${p}`))

		// no unexpected files
		result.forEach((p) => t.true(control.includes(p), `unexpected file ${p}`))

		return result
	})
	.then((commonPaths) => Promise.all(
		commonPaths
		.map((p) => (
			Promise.all([
				readFile(dResult(p)),
				readFile(dControl(p)),
			])
			.then(([result, control]) => t.is(
				control.toString(),
				(
					result
					.toString()
					.replace(
						new RegExp(
							ddTmp(`.`)()
							.replace(/\\/g, `\\\\`),
						`g`,
						),
						testResults,
					)
					.replace(/\\/g, `/`)
				),
				`aberration in ${p}`,
			))),
		),
	))
	.then(()=>{})
}

function npm (cmd:string, cwd:string, ...args:Array<string>) {
	return new Promise((resolve, reject) => {
		const runner = spawn(
			`npm.cmd`,
			[
				cmd,
				`--dry-run=false`, // `npm publish --dry-run` passes this down…
				...args,
			],
			{ cwd },
		)

		runner.on(`error`, (error) => reject(error))

		runner.on(`exit`, (code, signal) => resolve({
			code,
			signal,
		}))
	})
}
