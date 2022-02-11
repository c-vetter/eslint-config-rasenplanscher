import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowKeywords?: boolean
	allowPattern?: string
})[]

type Configuration = RuleConfiguration<'dot-notation', 'eslint', Options>

export default Configuration
