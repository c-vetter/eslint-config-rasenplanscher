import { RuleConfiguration } from '../../../support/Rule'

type Options = (("after" | "before" | "none" | "null") | {
	overrides?: {
		[key: string]: "after" | "before" | "none" | "ignore"
	}
})[]

type Configuration = RuleConfiguration<'operator-linebreak', 'eslint', Options>

export default Configuration