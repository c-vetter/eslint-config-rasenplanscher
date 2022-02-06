import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	disallowRedundantWrapping?: boolean
})[]

type Configuration = RuleConfiguration<'prefer-regex-literals', 'eslint', Options>

export default Configuration
