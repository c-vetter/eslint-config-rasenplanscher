import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "never") | {
	exceptRange?: boolean
	onlyEquality?: boolean
})[]

type Configuration = RuleConfiguration<'yoda', 'eslint', Options>

export default Configuration
