import { Linter } from 'eslint'
import { emptyDirSync, outputFile } from 'fs-extra'

import { rulesDefinitions } from './paths'
import { plugins, providerFor } from "./providers"


emptyDirSync(rulesDefinitions())

const rulesArray = Array.from((new Linter).getRules().entries())

plugins.forEach(
	plugin =>
		Object.entries(require(plugin.id).rules)
		.forEach(([key, rule]) => rulesArray.push([plugin.namespace + `/` + key, rule as typeof rulesArray[number][1]])),
)

rulesArray
.filter(([,{ meta }]) => meta && !meta.deprecated)
.map(([id, { meta }]) => ([
	id,
	id.includes(`/`) ? id.split(`/`)[1] : id,
	meta!, // previous filter ensures that this is non-falsy
	providerFor(id),
] as const))
.map(([id, key, meta, provider]) => ([
	rulesDefinitions(
		provider.name,
		`${key}.ts`,
	),
	{
		id,
		key,
		meta,
		providerId: provider.id,
	},
] as const))
.map(([filepath, rule]) => [
	filepath,
	`export default ${
		JSON.stringify(rule, null, `\t`)
		.replace(/"(\w+)":/g, `$1:`)
		.replace(/\\"(.+?)\\"/g, `“$1”`)
		.replace(/("|\s)'(.+?)'(\s|")/g, `$1‘$2’$3`)
		.replace(/'/g, `\\'`)
		.replace(/"/g, `'`)
		.replace(/\n}$/, `,\n}`)
	} as const`,
] as const)
.forEach(([filePath, fileContent]) => {
	outputFile(filePath, fileContent)
})
