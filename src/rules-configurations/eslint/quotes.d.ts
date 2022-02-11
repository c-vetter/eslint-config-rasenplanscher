import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("single" | "double" | "backtick") | (("avoid-escape") | {
	avoidEscape?: boolean
	allowTemplateLiterals?: boolean
}))[]

type Configuration = RuleConfiguration<'quotes', 'eslint', Options>

export default Configuration
