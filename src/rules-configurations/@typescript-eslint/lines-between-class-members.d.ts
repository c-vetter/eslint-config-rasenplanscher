import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/lines-between-class-members.d'

export type Options = (("always" | "never") | {
	exceptAfterSingleLine?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/lines-between-class-members', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
