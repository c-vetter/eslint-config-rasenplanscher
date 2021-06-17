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
import { RuleConfiguration, RuleConfigurationIgnore, RuleConfigurationOff, RuleConfigurationOptions, RuleConfigurationSet, RuleData } from './Rule'
import { Mutable } from './utility'


inquirer.registerPrompt(`autocomplete`, autocomplete)


type RuledataBundle = {
	base: RuleData
	extend: RuleData[]
	all: RuleData[]
}


export function processRule (bundle:RuledataBundle) {
	return Promise.all(bundle.all.flatMap(item => [
		(
			item.rule.meta.docs?.url
			? open(item.rule.meta.docs.url) as Promise<unknown>
			: Promise.reject(`No documentation url found for rule ${item.rule.id}`)
		),
		(
			pathExists(item.typingFile)
			.then(exists => (exists ? null : generateTypes(item, bundle)))
		),
		(
			pathExists(item.configFile)
			.then(exists => (exists ? null : generateConfig(item, bundle)))
			.then(() => code(item.configFile))
		),
		(
			pathExists(item.reasonFile)
			.then(exists => (exists ? null : generateDoc(item, bundle)))
			.then(() => code(item.reasonFile))
		),
	]))
}


//


const configToken = `configuration`
const extendedConfigKey = `base`
const extendedConfigToken = `baseConfiguration`
const configTypeToken = `Configuration`
const baseTypeToken = `RuleConfiguration`
const baseTypeTokenExtender = `RuleConfigurationOverride`
const extendedTypeToken = `BaseConfiguration`
const optionsTypeToken = `Options`

type Unpromise<T> = T extends PromiseLike<infer Q> ? Q : T

function generateTypes (item:RuleData, bundle:RuledataBundle) {
	return Promise.resolve(
		item === bundle.base
		&&
		item.rule.meta.schema as (
			Mutable<
				Exclude<typeof item.rule.meta.schema, undefined>
			>
		)
	)
	.then(schema => (
		Array.isArray(schema)
		? wrapped(schema)
		: schema
	))
	.then<false|Unpromise<ReturnType<typeof parseSchema>>>(schema => schema && parseSchema(schema, { name: optionsTypeToken }))
	.then(ast => ast && printer.printNodes(ast))
	.then(types => outdent`
		import { ${types ? baseTypeToken : baseTypeTokenExtender } } from '${
			importable(support(`Rule`), item.typingFile)
		}'

		${
			types
			? (
				types
				.replace(/;$/gm, ``)
				.replace(/(?<=(?:^|\n)(    )*)    /g, `\t`)
				.replace(/^export /, ``)
				.replace(/\(\)\[\]$/, `never[]`)
			)
			: outdent`
				import ${extendedTypeToken} from '${
					importable(bundle.base.typingFile, item.typingFile)
				}'
			`
		}

		type ${configTypeToken} = ${
			types
			? outdent`
				${baseTypeToken}<'${
					item.rule.id
				}', '${
					item.provider.id
				}', ${
					optionsTypeToken
				}>
			`
			: outdent`
				${baseTypeTokenExtender}<${
					extendedTypeToken
				}, '${
					item.rule.id
				}', '${
					item.provider.id
				}'>
			`
		}

		export default ${
			// https://github.com/microsoft/TypeScript/issues/3792#issuecomment-303526468
			configTypeToken
		}
	`)
	.then(types => outputFile(item.typingFile, types))

	function wrapped (schema:JSONSchema[]) : JSONSchema {
		return {
			type: `array`,
			items: schema,
			minItems: 0,
			maxItems: schema.length,
		}
	}
}

function generateConfig (item:RuleData, bundle:RuledataBundle) {
	if (item !== bundle.base) {
		return outputFile(
			item.configFile,
			outdent`
				import ${extendedConfigToken} from '${
					importable(bundle.base.configFile, item.configFile)
				}'
				${
					coreExport({ [extendedConfigKey]: extendedConfigToken })
					.replace(
						`${extendedConfigKey}: '${extendedConfigToken}',`,
						`${extendedConfigKey}: ${extendedConfigToken},`,
					)
				}
			` ,
		)
	}

	return inquirer.prompt([
		{
			type: `confirm`,
			name: `ignore`,
			message: `Ignore?`,
			default: false,
		},
	])
	.then((({ ignore }) => {
		if (ignore) return { ignore }

		return inquirer.prompt([
			{
				type: `list`,
				name: `priority`,
				message: `Priority:`,
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
				} as const)[ // eslint-disable-next-line @typescript-eslint/indent
					item.rule.meta.type
					|| (
						item.rule.meta.docs.category as (
							| 'Possible Errors'
							| 'Best Practices'
							| 'Stylistic Issues'
						)
					)
					|| `default`
				]
			},
			{
				type: `confirm`,
				name: `activate`,
				message: `Activate?`,
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
	.then((ruleConfig:Omit<RuleConfiguration, 'ruleId'|'providerId'>) => outputFile(
		item.configFile,
		coreExport(ruleConfig),
	))

	function coreExport (data:Record<string,unknown>) {
		return outdent`
			import ${configTypeToken} from '${
				importable(item.typingFile, item.configFile)
			}'

			const ${configToken}:${configTypeToken} = ${
				JSON.stringify({
					ruleId: item.rule.id,
					providerId: item.provider.id,
					...data,
				}, null, `\t`)
				.replace(/"(\w+)":/g, `$1:`)
				.replace(/'/g, `\\'`)
				.replace(/"/g, `'`)
				.replace(/\n}$/, `,\n}`)
			}

			export default ${configToken}

		`
	}
}

function generateDoc (item:RuleData, bundle:RuledataBundle) {
	if (!item.rule.meta.docs?.url) {
		return Promise.reject(`No documentation url found for rule ${item.rule.id}`)
	}

	return Promise.resolve(item === bundle.base)
	.then(base => outdent`
		[${item.rule.id}](${item.rule.meta.docs.url})
		${`=`.repeat(
			item.rule.id.length
			+ item.rule.meta.docs.url!.length // !: checked at the start of `generateDoc`
			+ 4 // brackets and parentheses
		)}
		${
			base
			? ``
			: `See [${bundle.base.rule.id}](${importable(bundle.base.reasonFile, item.reasonFile)})\n`
		}
	`)
	.then(doc => outputFile(item.reasonFile, doc))
}


//


function code (...filepaths:string[]) {
	spawn(
		`code.cmd`,
		filepaths,
		{ stdio:`pipe` }
	)
}
