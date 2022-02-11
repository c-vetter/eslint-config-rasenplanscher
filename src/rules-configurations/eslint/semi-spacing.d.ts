import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	before?: boolean
	after?: boolean
})[]

type Configuration = RuleConfiguration<'semi-spacing', 'eslint', Options>

export default Configuration
