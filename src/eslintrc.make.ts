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

type Configuration = typeof rulesConfigurations[number]

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

	if (
		availableConfigurations.includes(unusedImports_noUnusedVars)
		&& availableConfigurations.includes(typescript_noUnusedVars)
	) {
		const singleItem = 1

		availableConfigurations.splice(
			availableConfigurations.indexOf(typescript_noUnusedVars),
			singleItem,
		)
	}

	const parserOptions : Linter.ParserOptions = {...(overrides?.parserOptions ?? {})}

	// TODO: ensure only available configs will be added to this
	const extend : Array<string> = [...(overrides?.extends ?? [])]

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
						`error`,
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
		...(
			overrides?.parser === undefined
			&& canRequire(`@typescript-eslint/parser`)
			? { parser: `@typescript-eslint/parser` }
			: {}
		),
		parserOptions,
		extends: extend,
		plugins: ([
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

function isOverride (config:RuleConfiguration | RuleConfigurationOverride) : config is RuleConfigurationOverride {
	return Boolean((config as RuleConfigurationOverride).base)
}
