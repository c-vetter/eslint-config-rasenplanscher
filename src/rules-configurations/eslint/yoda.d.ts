import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never") | {
	exceptRange?: boolean
	onlyEquality?: boolean
})[]

type Configuration = RuleConfiguration<'yoda', 'eslint', Options>

export default Configuration