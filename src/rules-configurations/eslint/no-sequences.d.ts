import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowInParentheses?: boolean
})[]

type Configuration = RuleConfiguration<'no-sequences', 'eslint', Options>

export default Configuration
