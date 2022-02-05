import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	requireStringLiterals?: boolean
})[]

type Configuration = RuleConfiguration<'valid-typeof', 'eslint', Options>

export default Configuration
