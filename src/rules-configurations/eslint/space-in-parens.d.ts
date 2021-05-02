import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never") | {
	exceptions?: ("{}" | "[]" | "()" | "empty")[]
})[]

type Configuration = RuleConfiguration<'space-in-parens', 'eslint', Options>

export default Configuration