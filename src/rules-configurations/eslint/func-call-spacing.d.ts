import { RuleConfiguration } from '../../../support/Rule'

type Options = (("never"))[] | (("always") | {
	allowNewlines?: boolean
})[]

type Configuration = RuleConfiguration<'func-call-spacing', 'eslint', Options>

export default Configuration