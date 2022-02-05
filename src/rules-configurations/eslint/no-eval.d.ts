import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowIndirect?: boolean
})[]

type Configuration = RuleConfiguration<'no-eval', 'eslint', Options>

export default Configuration
