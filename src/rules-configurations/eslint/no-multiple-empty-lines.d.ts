import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	max: number
	maxEOF?: number
	maxBOF?: number
})[]

type Configuration = RuleConfiguration<'no-multiple-empty-lines', 'eslint', Options>

export default Configuration