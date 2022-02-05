import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allow?: string[]
})[]

type Configuration = RuleConfiguration<'no-console', 'eslint', Options>

export default Configuration
