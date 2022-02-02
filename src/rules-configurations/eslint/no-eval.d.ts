import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allowIndirect?: boolean
})[]

type Configuration = RuleConfiguration<'no-eval', 'eslint', Options>

export default Configuration
