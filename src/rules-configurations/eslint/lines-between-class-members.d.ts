import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never") | {
	exceptAfterSingleLine?: boolean
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration