import { Rule as EslintRule } from 'eslint'

import { DeepReadonly } from './utility'
import { Priority } from './priorities'
import { EslintProvider } from './providers'

export type RuleDefinition = DeepReadonly<{
	id: string
	key: string
	providerId: string
	meta: (
		& Omit<EslintRule.RuleMetaData, 'docs'|'fixable'>
		& {
			docs: (
				& Omit<Exclude<EslintRule.RuleMetaData['docs'], undefined>, 'recommended'>
				& {
					recommended?: (
						| Exclude<EslintRule.RuleMetaData['docs'], undefined>['recommended']
						| 'error'
						| 'warn'
						| 'true'
					)
				}
			)
			fixable?: EslintRule.RuleMetaData['fixable'] | null
		}
	)
}>


export type RuleData = {
	rule: RuleDefinition
	provider: EslintProvider
	configFile: string
	typingFile: string
	definitionFile: string
	reasonFile: string
	exists: boolean
	complete: boolean
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
