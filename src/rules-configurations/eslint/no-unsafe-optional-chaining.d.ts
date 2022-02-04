import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	disallowArithmeticOperators?: boolean
})[]

type Configuration = RuleConfiguration<'no-unsafe-optional-chaining', 'eslint', Options>

export default Configuration
