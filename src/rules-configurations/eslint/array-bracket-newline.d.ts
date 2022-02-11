import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ((("always" | "never" | "consistent") | {
	multiline?: boolean
	minItems?: number | null
}))[]

type Configuration = RuleConfiguration<'array-bracket-newline', 'eslint', Options>

export default Configuration
