import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	enforceForOrderingRelations?: boolean
})[]

type Configuration = RuleConfiguration<'no-unsafe-negation', 'eslint', Options>

export default Configuration
