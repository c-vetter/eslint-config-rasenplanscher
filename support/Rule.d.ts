import { Rule as EslintRule } from 'eslint'

import { Priority } from './priorities'

export type RuleDefinition = {
	id: string
	key: string
	providerId: string
	meta: (
		& Omit<EslintRule.RuleMetaData, 'docs'>
		& {
			docs: (
				& Omit<Exclude<EslintRule.RuleMetaData['docs'], undefined>, 'recommended'>
				& { recommended?: boolean | 'error' | 'warn' }
			)
		}
	)
}

export type RuleConfigurationBase = {
	ruleId: string
	providerId: string
}

export type RuleConfigurationIgnore = {
	ignore: true
}

export type RuleConfigurationOptions<T extends any[]=any[]> = {
	ignore?: false
	priority: Priority
	activate: boolean
	options: T
}

export type RuleConfigurationWithIgnore = RuleConfigurationBase & RuleConfigurationIgnore
export type RuleConfigurationWithOptions<T extends any[]=any[]> = RuleConfigurationBase & RuleConfigurationOptions<T>

export type RuleConfiguration<T extends any[]=any[]> = (
	| RuleConfigurationWithIgnore
	| RuleConfigurationWithOptions<T>
)
