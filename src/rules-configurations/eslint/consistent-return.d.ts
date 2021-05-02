import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	treatUndefinedAsUnspecified?: boolean
})[]

type Configuration = RuleConfiguration<'consistent-return', 'eslint', Options>

export default Configuration