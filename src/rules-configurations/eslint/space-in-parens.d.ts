import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never") | {
	exceptions?: ("{}" | "[]" | "()" | "empty")[]
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration
