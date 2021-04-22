import { RuleConfiguration } from '../../../support/Rule'

type Options = (("asc" | "desc") | {
	caseSensitive?: boolean
	natural?: boolean
	minKeys?: number
})[]

type Configuration = RuleConfiguration<'sort-keys', Options>

export default Configuration