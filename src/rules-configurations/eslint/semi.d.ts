import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("never") | {
	beforeStatementContinuationChars?: "always" | "any" | "never"
})[] | (("always") | {
	omitLastInOneLineBlock?: boolean
})[]

type Configuration = RuleConfiguration<'semi', 'eslint', Options>

export default Configuration
