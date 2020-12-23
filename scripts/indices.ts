import { camelCase } from "case-anything";
import { Dirent, outputFile, pathExistsSync, readdir } from 'fs-extra'

import { root, src, rulesDefinitions, rulesConfigurations, PathBuilder, trimTs } from '../_paths'

Promise.all([
	buildIndices(rulesDefinitions),
	buildIndices(rulesConfigurations),
])
.catch(error => {
	console.error(error)
})

function buildIndices(scope:PathBuilder, ...directory:string[]): ReturnType<typeof buildIndex> {
	return readdir(scope(...directory), { withFileTypes: true })
	.then(entries => Promise.all(
		entries
		.filter(entry => entry.isDirectory())
		.map(entry => buildIndices(scope, ...directory, entry.name))
	))
	.then(() => buildIndex(scope, ...directory))
}

const indexName = 'index.ts'

function buildIndex(scope:PathBuilder, ...directory:string[]) {
	return readdir(scope(...directory), { withFileTypes: true })
	.then(entries => entries.filter(entry => entry.name !== indexName))
	.then(entries =>[
		entries.filter(entry => entry.isDirectory() && pathExistsSync(scope(...directory, entry.name, indexName))),
		entries.filter(entry => entry.isFile() && entry.name.endsWith('.ts')),
	])
	.then(([directories, files]) => ([
		[
			...directories,
			...files,
		].map(entry => `import ${varName(entry)} from './${clippedName(entry)}'`),
		[
			...directories.map(entry => `...${varName(entry)}`),
			...files.map(entry => varName(entry)),
		],
	]))
	.then(([importsList, exportsList]) =>
		outputFile(scope(...directory, indexName), `${
			importsList.join('\n')
		}

		export default [
			${
				exportsList.join(',\n\t')
			}
		]`.replace(/^\t\t/gm, ''))
	)
}

function varName (entry:Dirent) {
	return camelCase(clippedName(entry))
}
function clippedName(entry:Dirent) {
	return trimTs(entry.name)
}
