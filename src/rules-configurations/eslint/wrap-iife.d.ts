import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("outside" | "inside" | "any") | {
	functionPrototypeMethods?: boolean
})[]

type Configuration = RuleConfiguration<'wrap-iife', 'eslint', Options>

export default Configuration
