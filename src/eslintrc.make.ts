import { CLIEngine } from 'eslint'

import rulesConfigurations from './rules-configurations'
import { providers } from './.providers'
import { Priority } from './priorities'
import { RuleConfiguration, RuleConfigurationBase, RuleConfigurationIgnored, RuleConfigurationOverride } from '../support/Rule'
import { canRequire } from '../support/canRequire'

import typescript_noUnusedVars from './rules-configurations/@typescript-eslint/no-unused-vars'
import unusedImports_noUnusedVars from './rules-configurations/unused-imports/no-unused-vars'

type Configuration = typeof rulesConfigurations[number]

type RuleId = (
	Configuration extends RuleConfigurationBase<infer I>
	? I
	: never
)

type Dangerzone = RuleId[]|boolean

type Options = {
	dangerzone?:Dangerzone
	priorities:Priority[]
	overrides?:CLIEngine.Options
}

//

export default function makeEslintrc (options:Options) : CLIEngine.Options
export default function makeEslintrc (...priorities:Priority[]) : CLIEngine.Options
export default function makeEslintrc (options: Options|Priority, ...morePriorities:Priority[]) : CLIEngine.Options {
	if (typeof options === `string`) {
		return makeEslintrc({
			priorities: [
				options,
				...morePriorities
			],
		})
	}

	const {
		priorities,
		dangerzone,
		overrides,
	} = options

	const availableConfigurations = rulesConfigurations.filter(config => providers[config.providerId])
	if (
		availableConfigurations.includes(unusedImports_noUnusedVars)
		&&
		availableConfigurations.includes(typescript_noUnusedVars)
	) {
		availableConfigurations.splice(availableConfigurations.indexOf(typescript_noUnusedVars), 1)
	}

	const overrideConfigurations:RuleConfigurationOverride[] = availableConfigurations.filter(
		(c) : c is RuleConfigurationOverride & Configuration =>
			Boolean ((c as RuleConfigurationOverride).base)
	)
	const overriddenConfigurations = overrideConfigurations.map(o => o.base)

	const usableConfigurations = (
		availableConfigurations
		.filter(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId']
		>(
			config:(
				| RuleConfiguration<R,P>
				| RuleConfigurationOverride<RuleConfiguration,R,P>
			)
		) => (
			!overriddenConfigurations.includes(config as RuleConfiguration))
		)
		.map(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId']
		>(
			config:(
				| RuleConfiguration<R,P>
				| RuleConfigurationOverride<RuleConfiguration,R,P>
			)
		) : RuleConfiguration<R,P> => {
			if (!isOverride(config)) return config

			const {
				base,
				...overrides
			} = config

			return {
				...base,
				...overrides,
			}
		})
		.filter(<
			R extends (typeof availableConfigurations)[number]['ruleId'],
			P extends (typeof availableConfigurations)[number]['providerId']
		>(
			config:RuleConfiguration<R,P>
		) : config is Exclude<
			RuleConfiguration<R,P>,
			RuleConfigurationIgnored
		> => {
			return !Boolean((config as RuleConfigurationIgnored).ignore)
		})
		.filter(config => priorities.includes(config.priority))
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
							config.optionsDangerzone && (
								dangerzone === true
								||
								(dangerzone||[]).includes(config.ruleId)
							)
							? config.optionsDangerzone
							: config.options
						)
					]
					: `off`
				)
				}}),
			{},
		)
	)

	return {
		...overrides,
		...(
			(!overrides?.parser) && canRequire(`@typescript-eslint/parser`)
			? { parser: `@typescript-eslint/parser` }
			: {}
		),
		plugins: ([
			...usableConfigurations
			.map(c => c.plugin)
			.filter((p) : p is Exclude<typeof p, 'eslint'> => p !== `eslint`),
			...(overrides?.plugins||[]),
		]),
		rules: Object.assign(
			{},
			...usableConfigurations.map(c => c.rule),
			overrides?.rules,
		),
	}
}

function isOverride (config:RuleConfiguration|RuleConfigurationOverride) : config is RuleConfigurationOverride {
	return Boolean((config as RuleConfigurationOverride).base)
}
