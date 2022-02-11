import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	commonjs?: boolean
	amd?: boolean
	esmodule?: boolean
	ignore?: string[]
	caseSensitive?: boolean
	caseSensitiveStrict?: boolean
})[]

type Configuration = RuleConfiguration<'import/no-unresolved', 'eslint-plugin-import', Options>

export default Configuration
