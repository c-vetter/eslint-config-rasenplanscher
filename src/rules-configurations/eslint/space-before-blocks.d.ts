import { RuleConfiguration } from '../../../support/Rule'

export type Options = ((("always" | "never") | {
	keywords?: "always" | "never" | "off"
	functions?: "always" | "never" | "off"
	classes?: "always" | "never" | "off"
}))[]

type Configuration = RuleConfiguration<'space-before-blocks', 'eslint', Options>

export default Configuration
