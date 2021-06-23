import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	before?: boolean
	after?: boolean
})[]

type Configuration = RuleConfiguration<'comma-spacing', 'eslint', Options>

export default Configuration