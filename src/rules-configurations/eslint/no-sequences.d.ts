import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowInParentheses?: boolean
})[]

type Configuration = RuleConfiguration<'no-sequences', 'eslint', Options>

export default Configuration
