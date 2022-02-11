import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	int32Hint?: boolean
})[]

type Configuration = RuleConfiguration<'space-infix-ops', 'eslint', Options>

export default Configuration
