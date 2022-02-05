import { RuleConfiguration } from '../../../support/Rule'

export type Options = ((("always" | "never") | {
	blocks?: "always" | "never"
	switches?: "always" | "never"
	classes?: "always" | "never"
}) | {
	allowSingleLineBlocks?: boolean
})[]

type Configuration = RuleConfiguration<'padded-blocks', 'eslint', Options>

export default Configuration
