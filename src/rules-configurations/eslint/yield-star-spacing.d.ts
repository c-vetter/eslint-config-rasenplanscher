import { RuleConfiguration } from '../../../support/Rule'

export type Options = ((("before" | "after" | "both" | "neither") | {
	before?: boolean
	after?: boolean
}))[]

type Configuration = RuleConfiguration<'yield-star-spacing', 'eslint', Options>

export default Configuration
