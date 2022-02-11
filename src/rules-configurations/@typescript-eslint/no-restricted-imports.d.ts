import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-restricted-imports.d'

export type Options = (any | {
	allowTypeImports?: boolean
})[] | {
	paths?: (any | {
		allowTypeImports?: boolean
	})[]
	patterns?: any | {
		allowTypeImports?: boolean
	}[]
}[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-restricted-imports', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
