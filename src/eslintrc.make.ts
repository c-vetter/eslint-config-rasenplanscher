import rulesConfigurations from './rules-configurations'
import { providers } from './.providers'
import { Priority } from './priorities'
import { RuleConfiguration, RuleConfigurationIgnored } from '../support/Rule'


export default function makeEslintrc (...priorities:Priority[]) {
	return {
		rules: (
			rulesConfigurations
			.filter(excludeIgnored)
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


function excludeIgnored<
	C extends RuleConfiguration<O>,
	O extends unknown[],
> (
	config:C
) : config is Exclude<C,RuleConfigurationIgnored> {
	return !config.ignore
}
