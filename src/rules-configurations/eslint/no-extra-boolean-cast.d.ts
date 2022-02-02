import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	enforceForLogicalOperands?: boolean
})[]

type Configuration = RuleConfiguration<'no-extra-boolean-cast', 'eslint', Options>

export default Configuration
