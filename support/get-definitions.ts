import { Linter } from 'eslint'
import { emptyDirSync, outputFile } from 'fs-extra'

import { rulesDefinitions } from './paths'
import { parse, plugins } from "./providers"


emptyDirSync(rulesDefinitions())

const rulesArray = Array.from((new Linter()).getRules().entries())

// i* = index for *
type iEntryValue = 1

plugins.forEach(
	(plugin) => (
		Object.entries(
			// eslint-plugin-unused-imports changes the base rules
			JSON.parse(JSON.stringify(require(plugin.id).rules)),
		)
		.forEach(([key, rule]) => rulesArray.push([
			plugin.namespace + key,
			rule as typeof rulesArray[number][iEntryValue],
		]))
	),
)

rulesArray
.filter(([,{ meta }]) => meta && meta.deprecated !== true)
.map(([id, { meta }]) => ([
	parse(id),
	meta!, // previous filter ensures that this is non-falsy
] as const))
.map(([{id, key, provider}, meta]) => ([
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
.forEach(([filepath, rule]) => outputFile(
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
))
