import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowParens?: boolean
})[]

type Configuration = RuleConfiguration<'no-confusing-arrow', 'eslint', Options>

export default Configuration
