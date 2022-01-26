import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/brace-style.d'

type Options = (("1tbs" | "stroustrup" | "allman") | {
	allowSingleLine?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/brace-style', '@typescript-eslint/eslint-plugin', Options>

export default Configuration