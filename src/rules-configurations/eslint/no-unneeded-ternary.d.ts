import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	defaultAssignment?: boolean
})[]

type Configuration = RuleConfiguration<'no-unneeded-ternary', 'eslint', Options>

export default Configuration
