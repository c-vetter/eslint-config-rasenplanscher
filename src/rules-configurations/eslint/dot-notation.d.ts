import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowKeywords?: boolean
	allowPattern?: string
})[]

type Configuration = RuleConfiguration<'dot-notation', 'eslint', Options>

export default Configuration
