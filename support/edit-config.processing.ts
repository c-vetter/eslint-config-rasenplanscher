///<reference path='_inquirer-autocomplete-prompt.d.ts'/>

import { spawn } from 'child_process'

import { printer } from '@spec2ts/core'
import { parseSchema, JSONSchema } from '@spec2ts/jsonschema'
import { outputFile, pathExists } from 'fs-extra'
import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'
import open from 'open'

import { importable, rulesConfigurations, rulesDefinitions, support } from './paths'
import priorities, { IMPORTANT, HELPFUL, TASTE } from './priorities'
import { EslintProvider, providers } from './providers'
import { RuleConfiguration, RuleConfigurationIgnore, RuleConfigurationOptions, RuleDefinition } from './Rule'


inquirer.registerPrompt('autocomplete', autocomplete)


type RuleData = {
	rule: RuleDefinition;
	provider: EslintProvider;
	configFile: string;
	typingFile: string;
	definitionFile: string;
	reasonFile: string;
}


export function processRule (rule:RuleDefinition) {
	const provider = providers.find(({ id }) => id === rule.providerId)
	if (!provider) throw new Error(`No provider found for rule ${rule.id}`)

	if (!rule.meta.docs?.url) throw new Error(`No documentation url found for rule ${rule.id}`)
	open(rule.meta.docs.url)

	const configFile = rulesConfigurations(provider.name, `${rule.key}.ts`)
	const typingFile = rulesConfigurations(provider.name, `${rule.key}.d.ts`)
	const reasonFile = rulesConfigurations(provider.name, `${rule.key}.md`)
	const definitionFile = rulesDefinitions(provider.name, `${rule.key}.ts`)

	const data = {
		rule,
		provider,
		configFile,
		typingFile,
		reasonFile,
		definitionFile,
	}

	code(reasonFile)

	return Promise.all([
		(
			pathExists(typingFile)
			.then(exists => ((exists || generateTypes(data)) as PromiseLike<void>))
		),
		(
			pathExists(configFile)
			.then(exists => ((exists || generateConfig(data)) as PromiseLike<void>))
			.then(() => code(configFile))
		),
	])
}


const configToken = 'configuration'
const configTypeToken = 'Configuration'
const baseTypeToken = 'RuleConfiguration'
const optionsTypeToken = 'Options'


function generateTypes(data:RuleData) {
	return import(data.definitionFile)
	.then(i => i.default.meta.schema as JSONSchema|JSONSchema[])
	.then(schema => (
		Array.isArray(schema)
		? wrapped(schema)
		: schema
	))
	.then(schema => parseSchema(schema, { name: optionsTypeToken }))
	.then(ast => printer.printNodes(ast))
	.then(types => types.replace(/^export /gm, ''))
	.then(types => (
		`import { ${baseTypeToken} } from '${
			importable(support('Rule'), data.typingFile)
		}'\n\n${
			types
		}\n\ntype ${configTypeToken} = ${baseTypeToken}<${
			optionsTypeToken
			// https://github.com/microsoft/TypeScript/issues/3792#issuecomment-303526468
		}>\n\nexport default ${configTypeToken}`
	))
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
				default: {
					problem: IMPORTANT,
					suggestion: HELPFUL,
					layout: TASTE,

					// some rules lack a meta.type, specifically in plugin react
					'Possible Errors': IMPORTANT,
					'Best Practices': HELPFUL,
					'Stylistic Issues': TASTE,

					// some rules lack a meta.type and a meta.docs.category, specifically in plugin react
					default: HELPFUL,
				}[
					data.rule.meta.type || (
						data.rule.meta.docs.category as (
							| 'Possible Errors'
							| 'Best Practices'
							| 'Stylistic Issues'
						)
					) || 'default']
			},
			{
				type: 'confirm',
				name: 'activate',
				message: 'Activate?',
				default: true,
			},
		])
		.then(({ activate, priority }) => ({
			priority,
			activate,
			options: [] as any[],
		}))
	}) as (
		(data:{ ignore: boolean }) => PromiseLike<RuleConfigurationIgnore|RuleConfigurationOptions>
	))
	.then(config => ({
		ruleId: data.rule.id,
		providerId: data.provider.id,
		...config,
	}))
	.then((ruleConfig:RuleConfiguration) => outputFile(
		data.configFile,
		`import ${configTypeToken} from '${
			importable(data.typingFile, data.configFile)
		}'\n\nconst ${configToken}:${configTypeToken} = ${
			JSON.stringify(ruleConfig, null, '\t')
			.replace(/"(\w+)":/g, '$1:')
			.replace(/'/g, `\\'`)
			.replace(/"/g, `'`)
			.replace(/\n}$/, `,\n}`)
		}\n\nexport default ${configToken}`,
	))
}


function code (...filepaths:string[]) {
	return spawn(
		'code.cmd',
		filepaths,
		{ stdio:'pipe' }
	)
}
