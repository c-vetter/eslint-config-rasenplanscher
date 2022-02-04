import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	capIsConstructor?: boolean
})[]

type Configuration = RuleConfiguration<'no-invalid-this', 'eslint', Options>

export default Configuration
