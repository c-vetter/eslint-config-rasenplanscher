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


type RuleConfigurationBase<I extends string = string> = {
	id: I
	ruleId: I extends `${string}/${infer R}` ? R : string extends I ? string : I
	providerId: I extends `${infer P}/${string}` ? P : string extends I ? string : 'eslint'
}
export type RuleConfigurationIgnore = {
	ignore: true
}
export type RuleConfigurationSet = {
	ignore?: never
	priority: Priority
}
export type RuleConfigurationOff = {
	activate: false
}
export type RuleConfigurationOptions<O extends unknown[] = unknown[]> = {
	activate: true
	options: O
	optionsDangerzone?: O
}

export type RuleConfigurationIgnored<I extends string = string> = (
	& RuleConfigurationBase<I>
	& RuleConfigurationIgnore
)
export type RuleConfigurationInactive<I extends string = string> = (
	& RuleConfigurationBase<I>
	& RuleConfigurationSet
	& RuleConfigurationOff
)
export type RuleConfigurationActive<I extends string = string, O extends unknown[] = unknown[]> = (
	& RuleConfigurationBase<I>
	& RuleConfigurationSet
	& RuleConfigurationOptions<O>
)

export type RuleConfiguration<I extends string = string, O extends unknown[] = unknown[]> = (
	| RuleConfigurationIgnored<I>
	| RuleConfigurationInactive<I>
	| RuleConfigurationActive<I, O>
)
