import { RuleConfiguration } from '../../../support/Rule'

type Options = (("1tbs" | "stroustrup" | "allman") | {
	allowSingleLine?: boolean
})[]

type Configuration = RuleConfiguration<'brace-style', 'eslint', Options>

export default Configuration