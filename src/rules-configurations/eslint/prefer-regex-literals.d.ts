import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	disallowRedundantWrapping?: boolean
})[]

type Configuration = RuleConfiguration<'prefer-regex-literals', 'eslint', Options>

export default Configuration
