import { relative, dirname } from 'path'

import { CLIEngine } from 'eslint'
import { outputFile } from 'fs-extra'

import { rulesDefinitions, trimTs } from '../_paths'
import { plugins } from "../_providers"
import { providerExportName, providersFile } from './providers'


const eslint = new (CLIEngine)({
	plugins: plugins.map(({ namespace }) => namespace),
})
eslint.executeOnText('') // https://github.com/eslint/eslint/issues/11871#issuecomment-504634145
const rulesMap = eslint.getRules()

const rulesList = Array.from(rulesMap.entries())
.map(([id, { meta }]) => ({
	id,
	key: id.includes('/') ? id.split('/')[1] : id,
	namespace: id.includes('/') ? id.split('/')[0] : 'eslint',
	meta,
}))

rulesList
.map(data => [
	data,
	data.namespace,
	data.key,
	providerExportName(data),
] as const)
.map(([data, namespace, key, provider]) => [
	data,
	rulesDefinitions(namespace, `${key}.ts`),
	provider,
] as const)
.map(([data, filepath, provider]) => [
	filepath,
	`import { ${provider} } from '${providersPath(filepath)}'`,
	`export default ${
		JSON.stringify(data, null, '\t')
		.replace(/"(\w+)":/g, '$1:')
		.replace(/\\"(.+?)\\"/g, '“$1”')
		.replace(/("|\s)'(.+?)'(\s|")/g, '$1‘$2’$3')
		.replace(/'/g, `\\'`)
		.replace(/"/g, `'`)
		.replace(/\n}$/, `,\n\tprovider: ${provider},\n} as const`)
	}`,
] as const)
.forEach(([filePath, fileImport, fileExport]) => {
	outputFile(filePath, `${fileImport}\n${fileExport}`)
})


function providersPath(filepath:string) {
	return (
		relative(dirname(filepath), trimTs(providersFile))
		.replace(/\\/g, '/')
	)
}
