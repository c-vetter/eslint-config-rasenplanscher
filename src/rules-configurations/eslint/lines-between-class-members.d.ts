import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never") | {
	exceptAfterSingleLine?: boolean
})[]

type Configuration = RuleConfiguration<'lines-between-class-members', 'eslint', Options>

export default Configuration