import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowParens?: boolean
})[]

type Configuration = RuleConfiguration<'no-confusing-arrow', 'eslint', Options>

export default Configuration
