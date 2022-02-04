import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/init-declarations.d'

export type Options = (("always"))[] | (("never") | {
	ignoreForLoopInit?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/init-declarations', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
