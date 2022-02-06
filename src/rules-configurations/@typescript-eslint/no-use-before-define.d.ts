import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-use-before-define.d'

export type Options = ((("nofunc") | {
	functions?: boolean
	classes?: boolean
	enums?: boolean
	variables?: boolean
	typedefs?: boolean
	ignoreTypeReferences?: boolean
}))[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-use-before-define', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
