import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allowParens?: boolean
})[]

type Configuration = RuleConfiguration<'no-confusing-arrow', 'eslint', Options>

export default Configuration