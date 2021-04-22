import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	treatUndefinedAsUnspecified?: boolean
})[]

type Configuration = RuleConfiguration<'consistent-return', Options>

export default Configuration