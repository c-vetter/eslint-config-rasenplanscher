import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("first" | "last") | {
	exceptions?: {
		[key: string]: boolean
	}
})[]

type Configuration = RuleConfiguration<'comma-style', 'eslint', Options>

export default Configuration
