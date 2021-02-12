import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allowNamedFunctions?: boolean
	allowUnboundThis?: boolean
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration