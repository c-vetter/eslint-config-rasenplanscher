import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	ignoreNonDeclaration?: boolean
})[]

type Configuration = RuleConfiguration<'no-multi-assign', 'eslint', Options>

export default Configuration
