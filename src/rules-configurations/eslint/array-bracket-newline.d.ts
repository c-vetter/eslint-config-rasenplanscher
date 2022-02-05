import { RuleConfiguration } from '../../../support/Rule'

export type Options = ((("always" | "never" | "consistent") | {
	multiline?: boolean
	minItems?: number | null
}))[]

type Configuration = RuleConfiguration<'array-bracket-newline', 'eslint', Options>

export default Configuration
