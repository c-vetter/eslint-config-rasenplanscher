import { CLIEngine } from 'eslint'

import rulesConfigurations from './rules-configurations'
import { providers } from './.providers'
import { Priority } from './priorities'
import { RuleConfiguration, RuleConfigurationBase, RuleConfigurationIgnored } from '../support/Rule'


type RuleId = (
	typeof rulesConfigurations extends Array<infer I>
	? (
		I extends RuleConfigurationBase<infer I>
		? I
		: never
	)
	: never
)

type Dangerzone = RuleId[]|boolean

type Options = {
	dangerzone?:Dangerzone
	priorities:Priority[]
	overrides?:CLIEngine.Options
}


export default function makeEslintrc (options:Options) : CLIEngine.Options
export default function makeEslintrc (...priorities:Priority[]) : CLIEngine.Options
export default function makeEslintrc (options: Options|Priority, ...morePriorities:Priority[]) {
	if (typeof options === 'string') {
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

	return {
		...overrides,
		rules: {
			...(
				rulesConfigurations
				.filter(excludeIgnored)
				.filter(config => priorities.includes(config.priority))
				.filter(config => providers[config.providerId as keyof typeof providers])
				.reduce(
					(r, config) => ({
						...r,
						[config.id]: (
							config.activate
							? [
								'error',
								...(
									config.optionsDangerzone && (
										dangerzone === true
										||
										(dangerzone||[]).includes(config.id)
									)
									? config.optionsDangerzone
									: config.options
								)
							]
							: 'off'
						)
					}),
					{},
				)
			),
			...overrides?.rules,
		},
	}
}


function excludeIgnored<
	C extends RuleConfiguration<string, O>,
	O extends unknown[],
> (
	config:C
) : config is Exclude<C,RuleConfigurationIgnored> {
	return !config.ignore
}
