import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	typesToIgnore?: string[]
})[]

type Configuration = RuleConfiguration<'@typescript-eslint/no-unnecessary-type-assertion', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
