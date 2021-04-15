///<reference path='_inquirer-autocomplete-prompt.d.ts'/>

import { spawn } from 'child_process'

import { printer } from '@spec2ts/core'
import { parseSchema, JSONSchema } from '@spec2ts/jsonschema'
import { outputFile, pathExists } from 'fs-extra'
import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'
import open from 'open'
import { outdent } from 'outdent'

import { importable, support } from './paths'
import priorities, { IMPORTANT, HELPFUL, TASTE, Priority } from './priorities'
import { RuleConfiguration, RuleConfigurationIgnore, RuleConfigurationOff, RuleConfigurationOptions, RuleConfigurationSet, RuleData, RuleDefinition } from './Rule'
import { Mutable } from './utility'


inquirer.registerPrompt('autocomplete', autocomplete)


export function processRule (data:RuleData) {
	if (!data.rule.meta.docs?.url) throw new Error(`No documentation url found for rule ${data.rule.id}`)
	open(data.rule.meta.docs.url)

	return Promise.all([
		(
			pathExists(data.typingFile)
			.then(exists => (exists ? null : generateTypes(data)))
		),
		(
			pathExists(data.configFile)
			.then(exists => (exists ? null : generateConfig(data)))
			.then(() => code(data.configFile))
		),
		(
			pathExists(data.reasonFile)
			.then(exists => (exists ? null : generateDoc(data)))
			.then(() => code(data.reasonFile))
		),
	])
}


//


const configToken = 'configuration'
const configTypeToken = 'Configuration'
const baseTypeToken = 'RuleConfiguration'
const optionsTypeToken = 'Options'

function generateTypes (data:RuleData) {
	return Promise.resolve(
		data.rule.meta.schema as (
			Mutable<
				Exclude<typeof data.rule.meta.schema, undefined>
			>
		)
	)
	.then(schema => (
		Array.isArray(schema)
		? wrapped(schema)
		: schema
	))
	.then(schema => parseSchema(schema, { name: optionsTypeToken }))
	.then(ast => printer.printNodes(ast))
	.then(types => outdent`
		import { ${baseTypeToken} } from '${
			importable(support('Rule'), data.typingFile)
		}'

		${
			types
			.replace(/;$/gm, '')
			.replace(/(?<=(?:^|\n)(    )*)    /g, '\t')
			.replace(/^export /, '')
			.replace(/\(\)\[\]$/, 'never[]')
		}

		type ${configTypeToken} = ${baseTypeToken}<${
			optionsTypeToken
			// https://github.com/microsoft/TypeScript/issues/3792#issuecomment-303526468
		}>

		export default ${configTypeToken}
	`)
	.then(types => outputFile(data.typingFile, types))

	function wrapped (schema:JSONSchema[]) : JSONSchema {
		return {
			type: 'array',
			items: schema,
			minItems: 0,
			maxItems: schema.length,
		}
	}
}

function generateConfig (data:RuleData) {
	return inquirer.prompt([
		{
			type: 'confirm',
			name: 'ignore',
			message: 'Ignore?',
			default: false,
		},
	])
	.then((({ ignore }) => {
		if (ignore) return { ignore }

		return inquirer.prompt([
			{
				type: 'list',
				name: 'priority',
				message: 'Priority:',
				choices: priorities,
				default: ({
					problem: IMPORTANT,
					suggestion: HELPFUL,
					layout: TASTE,

					// some rules lack a meta.type, specifically in plugin react
					'Possible Errors': IMPORTANT,
					'Best Practices': HELPFUL,
					'Stylistic Issues': TASTE,

					// some rules lack a meta.type and a meta.docs.category, specifically in plugin react
					default: HELPFUL,
				} as const)[
					data.rule.meta.type
					|| (
						data.rule.meta.docs.category as (
							| 'Possible Errors'
							| 'Best Practices'
							| 'Stylistic Issues'
						)
					)
					|| 'default'
				]
			},
			{
				type: 'confirm',
				name: 'activate',
				message: 'Activate?',
				default: true,
			},
		])
		.then(({ activate, priority }:{ activate:boolean, priority:Priority }) => ({
			priority,
			activate,
			options: (
				activate
				? []
				: undefined
			),
		}))
	}) as (
		(data:{ ignore: boolean }) => PromiseLike<RuleConfigurationIgnore|(RuleConfigurationSet&(RuleConfigurationOff|RuleConfigurationOptions))>
	))
	.then(config => ({
		ruleId: data.rule.id,
		providerId: data.provider.id,
		...config,
	}))
	.then((ruleConfig:RuleConfiguration) => outputFile(
		data.configFile,
		outdent`
			import ${configTypeToken} from '${
				importable(data.typingFile, data.configFile)
			}'

			const ${configToken}:${configTypeToken} = ${
				JSON.stringify(ruleConfig, null, '\t')
				.replace(/"(\w+)":/g, '$1:')
				.replace(/'/g, `\\'`)
				.replace(/"/g, `'`)
				.replace(/\n}$/, `,\n}`)
			}

			export default ${configToken}

		`,
	))
}
function generateDoc (data:RuleData) {
	return Promise.resolve(data.rule.id)
	.then(id => outdent`
		${id}
		${'='.repeat(id.length)}

	`)
	.then(doc => outputFile(data.reasonFile, doc))
}


//


function code (...filepaths:string[]) {
	return spawn(
		'code.cmd',
		filepaths,
		{ stdio:'pipe' }
	)
}
