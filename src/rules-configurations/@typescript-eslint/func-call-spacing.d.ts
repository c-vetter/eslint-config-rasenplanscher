import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/func-call-spacing.d'

export type Options = (("never"))[] | (("always") | {
	allowNewlines?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/func-call-spacing', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
