import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	requireStringLiterals?: boolean
})[]

type Configuration = RuleConfiguration<'valid-typeof', 'eslint', Options>

export default Configuration
