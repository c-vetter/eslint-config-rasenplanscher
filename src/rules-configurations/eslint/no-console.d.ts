import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allow?: string[]
})[]

type Configuration = RuleConfiguration<'no-console', 'eslint', Options>

export default Configuration
