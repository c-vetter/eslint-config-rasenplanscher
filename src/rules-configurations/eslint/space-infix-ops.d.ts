import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	int32Hint?: boolean
})[]

type Configuration = RuleConfiguration<'space-infix-ops', 'eslint', Options>

export default Configuration
