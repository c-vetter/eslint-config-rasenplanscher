import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	treatUndefinedAsUnspecified?: boolean
})[]

type Configuration = RuleConfiguration<'consistent-return', 'eslint', Options>

export default Configuration
