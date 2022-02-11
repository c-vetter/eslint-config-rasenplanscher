import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowConstructorFlags?: string[]
})[]

type Configuration = RuleConfiguration<'no-invalid-regexp', 'eslint', Options>

export default Configuration
