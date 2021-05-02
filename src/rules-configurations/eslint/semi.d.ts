import { RuleConfiguration } from '../../../support/Rule'

type Options = (("never") | {
	beforeStatementContinuationChars?: "always" | "any" | "never"
})[] | (("always") | {
	omitLastInOneLineBlock?: boolean
})[]

type Configuration = RuleConfiguration<'semi', 'eslint', Options>

export default Configuration