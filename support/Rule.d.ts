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
export type RuleConfigurationSet = {
	ignore?: false
	priority: Priority
}
export type RuleConfigurationOff = {
	activate: false
}
export type RuleConfigurationOptions<O extends unknown[] = unknown[]> = {
	activate: true
	options: O
}

export type RuleConfigurationIgnored = (
	& RuleConfigurationBase
	& RuleConfigurationIgnore
)
export type RuleConfigurationInactive = (
	& RuleConfigurationBase
	& RuleConfigurationSet
	& RuleConfigurationOff
)
export type RuleConfigurationActive<O extends unknown[] = unknown[]> = (
	& RuleConfigurationBase
	& RuleConfigurationSet
	& RuleConfigurationOptions<O>
)

export type RuleConfiguration<O extends unknown[] = unknown[]> = (
	| RuleConfigurationIgnored
	| RuleConfigurationInactive
	| RuleConfigurationActive<O>
)
