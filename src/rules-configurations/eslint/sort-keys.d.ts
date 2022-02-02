import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("asc" | "desc") | {
	caseSensitive?: boolean
	natural?: boolean
	minKeys?: number
})[]

type Configuration = RuleConfiguration<'sort-keys', 'eslint', Options>

export default Configuration
