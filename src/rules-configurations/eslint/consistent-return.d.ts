import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	treatUndefinedAsUnspecified?: boolean
})[]

type Configuration = RuleConfiguration<'consistent-return', 'eslint', Options>

export default Configuration
