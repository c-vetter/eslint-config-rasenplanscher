import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowNamedFunctions?: boolean
	allowUnboundThis?: boolean
})[]

type Configuration = RuleConfiguration<'prefer-arrow-callback', 'eslint', Options>

export default Configuration
