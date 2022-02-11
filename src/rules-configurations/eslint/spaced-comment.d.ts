import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "never") | {
	exceptions?: string[]
	markers?: string[]
	line?: {
		exceptions?: string[]
		markers?: string[]
	}
	block?: {
		exceptions?: string[]
		markers?: string[]
		balanced?: boolean
	}
})[]

type Configuration = RuleConfiguration<'spaced-comment', 'eslint', Options>

export default Configuration
