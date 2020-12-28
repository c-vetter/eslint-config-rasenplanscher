import rulesConfigurations from './rules-configurations'
import { providers } from './.providers'
import { Priority } from './priorities'
import { RuleConfigurationWithIgnore as WithIgnore, RuleConfigurationWithOptions as WithOptions } from '../support/Rule'

export default function makeEslintrc (...priorities:Priority[]) {
	return {
		rules: (
			rulesConfigurations
			.filter((config => !config.ignore) as (
				(config:WithIgnore|WithOptions) => config is WithOptions
			))
			.filter(config => priorities.includes(config.priority))
			.filter(config => providers[config.providerId as keyof typeof providers])
			.reduce(
				(r, config) => ({
					...r,
					[config.ruleId]: (
						config.activate
						? [ 'error', ...config.options ]
						: 'off'
					)
				}),
				{},
			)
		),
	}
}
