import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	includeExports?: boolean
})[]

type Configuration = RuleConfiguration<'no-duplicate-imports', 'eslint', Options>

export default Configuration
