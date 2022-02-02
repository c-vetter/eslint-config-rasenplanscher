import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/quotes.d'

export type Options = (("single" | "double" | "backtick") | (("avoid-escape") | {
	avoidEscape?: boolean
	allowTemplateLiterals?: boolean
}))[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/quotes', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
