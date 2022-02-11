/// <reference path='../support/_Object.d.ts'/>

import { Linter } from 'eslint'

import { canRequire } from '../support/canRequire'
import { RuleConfiguration, RuleConfigurationBase, RuleConfigurationIgnored, RuleConfigurationInactive, RuleConfigurationOptions, RuleConfigurationOverride, RuleConfigurationSet } from '../support/Rule.d'

import { providers } from './.providers'
import { Priority } from './priorities'
import rulesConfigurations from './rules-configurations'
import typescript_noDuplicateImports from './rules-configurations/@typescript-eslint/no-duplicate-imports'
import typescript_noUnusedVars from './rules-configurations/@typescript-eslint/no-unused-vars'
import eslint_noDuplicateImports from './rules-configurations/eslint/no-duplicate-imports'
import import_noDuplicates from './rules-configurations/import/no-duplicates'
import import_order from './rules-configurations/import/order'
import simpleImportSort_imports from './rules-configurations/simple-import-sort/imports'
import unusedImports_noUnusedVars from './rules-configurations/unused-imports/no-unused-vars'

type Configurations = typeof rulesConfigurations
type Configuration = Configurations[number]

type RuleId = (
	Configuration extends RuleConfigurationBase<infer I>
	? I
	: never
)

type Dangerzone = RuleId[] | boolean

type Options = {
	dangerzone?:Dangerzone
	priorities:Priority[]
	overrides?:Linter.Config
}

//

export default makeEslintrc

function makeEslintrc (configuration:Options) : Linter.Config
function makeEslintrc (...priorities:Priority[]) : Linter.Config

function makeEslintrc (configuration:(Options | Priority), ...morePriorities:Priority[]) : Linter.Config {
	if (typeof configuration === `string`) {
		return makeEslintrc({
			priorities: [
				configuration,
				...morePriorities,
			],
		})
	}

	const {
		priorities,
		dangerzone,
		overrides,
	} = configuration

	const availableConfigurations = rulesConfigurations.filter((config) => providers[config.providerId])

	if (availableConfigurations.includes(unusedImports_noUnusedVars)) {
		deactivateRule(availableConfigurations, typescript_noUnusedVars)
	}

	if (availableConfigurations.includes(simpleImportSort_imports)) {
		deactivateRule(availableConfigurations, import_order)
	}

	// TODO: ensure only available configs will be added to this
	const extend = ensureArray(overrides?.extends)
	const parserOptions = ensureRecord(overrides?.parserOptions)

	let parser : Linter.Config[`parser`] = overrides?.parser

	const parserTs = `@typescript-eslint/parser`
	const parserVue = `vue-eslint-parser`

	if (parser === undefined) {
		if (canRequire(parserTs)) {
			parser = parserTs
		}
	}

	if (
		typeof providers[`eslint-plugin-vue`] === `string`
		&& parser !== parserVue
		&& parserOptions[`parser`] === undefined
	) {
		parserOptions[`parser`] = parser
		parser = parserVue

		parserOptions[`extraFileExtensions`] = [
			`.vue`,
		]
	}

	if (typeof providers[`eslint-plugin-import`] === `string`) {
		if (parserOptions.sourceType === `script`) {
			throw new Error(
				// no outdent in order to not have dependencies for a config
				`Cannot use \`eslint-plugin-import\` with source type script.`
				+ `See https://github.com/import-js/eslint-plugin-import/blob/68cea3e6b6fe5fd61e5cf2e2c7c0be9e8dc597cb/config/recommended.js#L22`,
			)
		}

		parserOptions.sourceType = `module`

		const minEcmaVersion = 2018

		if (
			parserOptions.ecmaVersion !== undefined
			&& parserOptions.ecmaVersion !== `latest`
			&& parserOptions.ecmaVersion < minEcmaVersion
		) {
			throw new Error(
				// no outdent in order to not have dependencies for a config
				`Cannot use \`eslint-plugin-import\` with ecma version less than 2018`
				+ `See https://github.com/import-js/eslint-plugin-import/blob/68cea3e6b6fe5fd61e5cf2e2c7c0be9e8dc597cb/config/recommended.js#L22`,
			)
		}

		parserOptions.ecmaVersion = parserOptions.ecmaVersion ?? minEcmaVersion

		if (availableConfigurations.includes(import_noDuplicates)) {
			deactivateRule(availableConfigurations, eslint_noDuplicateImports)
			deactivateRule(availableConfigurations, typescript_noDuplicateImports)
		}

		if (typeof providers[`@typescript-eslint/eslint-plugin`] === `string`) {
			// TODO: ensure only available configs will be added to this
			extend.push(`plugin:import/typescript`)
		}
	}

	const overrideConfigurations:RuleConfigurationOverride[] = availableConfigurations.filter(
		(c) : c is RuleConfigurationOverride & Configuration => (
			Boolean((c as RuleConfigurationOverride).base)
		),
	)

	const overriddenConfigurations = overrideConfigurations.map((o) => o.base)

	const usableConfigurations = (
		availableConfigurations
		.filter(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId'],
		>(
			config:(
				| RuleConfiguration<R, P>
				| RuleConfigurationOverride<RuleConfiguration, R, P>
			),
		) => (
			!overriddenConfigurations.includes(config as RuleConfiguration)),
		)
		.map(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId'],
		>(
			config:(
				| RuleConfiguration<R, P>
				| RuleConfigurationOverride<RuleConfiguration, R, P>
			),
		) : RuleConfiguration<R, P> => {
			if (!isOverride(config)) return config

			const {
				base,

				ruleId,
				providerId,
				ignore,
				activate,
			} = config

			const priority = config.priority ?? (base as RuleConfigurationSet).priority
			const options = config.options ?? (base as RuleConfigurationOptions).options
			const optionsDangerzone = config.optionsDangerzone ?? (base as RuleConfigurationOptions).optionsDangerzone

			if (ignore === true) {
				return {
					ruleId,
					providerId,
					ignore,
				}
			}

			if (activate === false) {
				return {
					ruleId,
					providerId,
					priority,
					activate,
				}
			}

			if (activate === true) {
				return {
					ruleId,
					providerId,
					priority,
					activate,
					options,
					optionsDangerzone,
				}
			}

			if (base.ignore === true) {
				return {
					ruleId,
					providerId,
					ignore: base.ignore,
				}
			}

			if (!base.activate) {
				return {
					ruleId,
					providerId,
					priority,
					activate: base.activate,
				}
			}

			return {
				ruleId,
				providerId,
				priority,
				activate: base.activate,
				options,
				optionsDangerzone,
			}
		})
		.filter(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId'],
		>(
			config:RuleConfiguration<R, P>,
		) : config is Exclude<
			RuleConfiguration<R, P>,
			RuleConfigurationIgnored
		> => !(config as RuleConfigurationIgnored | RuleConfigurationSet).ignore)
		.filter((config) => priorities.includes(config.priority))
		.map(
			(config) => ({
				plugin: providers[config.providerId] as Exclude<
					typeof providers[typeof config['providerId']],
					false // this has been implicitly excluded by selecting `config` based on the provider name being truthy
				>,
				rule: { [config.ruleId]: (
					config.activate
					? [
						config.priority === `TASTE` ? `warn` : `error`,
						...(
							Array.isArray(config.optionsDangerzone) && (
								dangerzone === true
								|| (Array.isArray(dangerzone) ? dangerzone : []).includes(config.ruleId)
							)
							? config.optionsDangerzone
							: config.options
						),
					]
					: `off`
				),
				}}),
			{},
		)
	)

	return {
		...overrides,

		extends: extend,
		parser,
		parserOptions,
		plugins: ([
			...(
				typeof providers[`eslint-plugin-vue`] === `string`
				? [`vue`]
				: []
			),
			...usableConfigurations
			.map((c) => c.plugin)
			.filter((p) : p is Exclude<typeof p, 'eslint'> => p !== `eslint`),
			...(overrides?.plugins || []),
		]),
		rules: Object.assign(
			{},
			...usableConfigurations.map((c) => c.rule),
			overrides?.rules,
		),
	}
}


//


function isOverride (config:RuleConfiguration | RuleConfigurationOverride) : config is RuleConfigurationOverride {
	return Boolean((config as RuleConfigurationOverride).base)
}

function ensureArray<T> (data?:(Array<T> | T)) : Array<T> {
	if (data === undefined) return []
	if (Array.isArray(data)) return [...data]

	return [data]
}

function ensureRecord<T extends Record<string, unknown> = Record<string, unknown>> (data?:T) : Partial<T> {
	if (data === undefined) return {}

	return {...data}
}


//


function deactivateRule (array:Array<RuleConfiguration | RuleConfigurationOverride>, item: Configuration) : void {
	if (!array.includes(item)) return

	const singleItem = 1

	array.splice(
		array.indexOf(item),
		singleItem,
		deactivated(item),
	)
}

function deactivated<
	R extends string = string,
	P extends string = string,
	O extends unknown[] = unknown[],
> (
	configuration:RuleConfiguration<R, P, O> | RuleConfigurationOverride<RuleConfiguration, R, P, O>,
) : (
	| RuleConfigurationIgnored<R, P>
	| RuleConfigurationInactive<R, P>
	| RuleConfigurationOverride<RuleConfiguration, R, P, O>
) {
	if (isIgnored(configuration)) {
		return configuration
	}

	return {
		...Object.fromEntries(
			Object.entries(configuration)
			.filter(([key]) => !key.startsWith(`options`)),
		),

		activate: false as const,

		// need to assert because the chain entries→filter→fromEntries is unable to preserve the exact type association between key and value
	} as RuleConfigurationInactive<R, P>
}

function isIgnored (configuration:RuleConfiguration | RuleConfigurationOverride) : configuration is RuleConfigurationIgnored {
	return configuration.ignore ?? false
}
