import { camelCase } from "case-anything"
import { Dirent, outputFile, pathExistsSync, readdir } from 'fs-extra'

import { rulesDefinitions, rulesConfigurations, PathBuilder, trimTs } from './paths'


const roots = {
	rulesDefinitions,
	rulesConfigurations,
}

const root = process.argv[2] as keyof typeof roots

buildIndices(roots[root])
.catch(error => {
	console.error(error)
})

function buildIndices (scope:PathBuilder, ...directory:string[]): ReturnType<typeof buildIndex> {
	return readdir(scope(...directory), { withFileTypes: true })
	.then(entries => Promise.all(
		entries
		.filter(entry => entry.isDirectory())
		.map(entry => buildIndices(scope, ...directory, entry.name)),
	))
	.then(() => buildIndex(scope, ...directory))
}

const indexName = `index.ts`

function buildIndex (scope:PathBuilder, ...directory:string[]) {
	return readdir(scope(...directory), { withFileTypes: true })
	.then(entries => entries.filter(entry => entry.name !== indexName))
	.then(entries =>[
		entries.filter(entry => entry.isDirectory() && pathExistsSync(scope(...directory, entry.name, indexName))),
		entries.filter(entry => entry.isFile() && entry.name.endsWith(`.ts`) && !entry.name.endsWith(`.d.ts`)),
	])
	.then(([directories, files]) => ([
		[
			...directories.map(importStatement(dirName)),
			...files.map(importStatement(fileName)),
		],
		[
			...directories.map(entry => `...${dirName(entry)}`),
			...files.map(entry => fileName(entry)),
		],
	]))
	.then(([importsList, exportsList]) =>
		outputFile(scope(...directory, indexName), `${
			importsList.join(`\n`)
		}

		export default [
			${
				exportsList.join(`,\n\t`)
			},
		]`.replace(/^\t\t/gm, ``)),
	)
}

function importStatement (varName: (entry: Dirent) => string) {
	return (entry:Dirent) =>`import ${varName(entry)} from './${clippedName(entry)}'`
}
function dirName (entry:Dirent) {
	return `__${camelCase(clippedName(entry))}__`
}
function fileName (entry:Dirent) {
	return `_${camelCase(clippedName(entry))}_`
}
function clippedName (entry:Dirent) {
	return trimTs(entry.name)
}
