import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "never") | {
	exceptions?: ("{}" | "[]" | "()" | "empty")[]
})[]

type Configuration = RuleConfiguration<'space-in-parens', 'eslint', Options>

export default Configuration
