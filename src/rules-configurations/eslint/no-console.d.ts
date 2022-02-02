import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allow?: string[]
})[]

type Configuration = RuleConfiguration<'no-console', 'eslint', Options>

export default Configuration
