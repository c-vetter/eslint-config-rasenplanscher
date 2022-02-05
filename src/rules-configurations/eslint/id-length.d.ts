import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	min?: number
	max?: number
	exceptions?: string[]
	exceptionPatterns?: string[]
	properties?: "always" | "never"
})[]

type Configuration = RuleConfiguration<'id-length', 'eslint', Options>

export default Configuration