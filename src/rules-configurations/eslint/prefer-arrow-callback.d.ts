import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allowNamedFunctions?: boolean
	allowUnboundThis?: boolean
})[]

type Configuration = RuleConfiguration<'prefer-arrow-callback', Options>

export default Configuration