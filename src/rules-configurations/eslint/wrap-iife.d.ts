import { RuleConfiguration } from '../../../support/Rule'

type Options = (("outside" | "inside" | "any") | {
	functionPrototypeMethods?: boolean
})[]

type Configuration = RuleConfiguration<'wrap-iife', 'eslint', Options>

export default Configuration