import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("never"))[] | (("always") | {
	allowNewlines?: boolean
})[]

type Configuration = RuleConfiguration<'func-call-spacing', 'eslint', Options>

export default Configuration
