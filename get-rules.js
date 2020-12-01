const fs = require('fs-extra')

const { camelCase, kebabCase } = require('case-anything')

const eslint = new (require('eslint').CLIEngine)({
	plugins: [
		'@typescript-eslint',
		'import',
		'jsdoc',
		'react',
		'react-hooks',
		'regex',
		'typescript-custom-sort-keys',
		'unused-imports',
	],
})
eslint.executeOnText('') // https://github.com/eslint/eslint/issues/11871#issuecomment-504634145
const rulesMap = eslint.getRules()

const rulesList = Array.from(rulesMap.entries())
.map(([id, { meta }]) => ({
	id,
	key: id.includes('/') ? id.split('/')[1] : id,
	namespace: id.includes('/') ? id.split('/')[0] : 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta,
}))

rulesList
.map(data => [data, JSON.stringify(data,null,'\t')])
.map(([data, json]) => [
	data,
	`export const ${camelCase(data.id)} = ${
		json
		.replace(/"(\w+)":/g, '$1:')
		.replace(/'(.+?)'/g, '‘$1’')
		.replace(/\\"(.+?)\\"/g, '“$1”')
		.replace(/"/g, `'`)
	}`
])
.forEach(([data, file]) => {
	fs.outputFile(`rules/${kebabCase(data.namespace)}/${kebabCase(data.key)}.ts`, file)
})


const [imports, exportsList] = rulesList
.map(({ id, key, namespace }) => ([
	camelCase(id),
	`import { ${camelCase(id)} } from './${kebabCase(namespace)}/${kebabCase(key)}'`,
]))
.reduce(
	([imports, exports], [id,importStatement]) => [
		[...imports, importStatement],
		[...exports, id],
	],
	[[],[]]
)

fs.outputFile('rules/index.ts', `${
	imports.join('\n')
}

export default [
	${
		exportsList.join(',\n\t')
	}
]

export {
	${
		exportsList.join(',\n\t')
	}
}`)
