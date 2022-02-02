import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-redeclare.d'

export type Options = ({
	builtinGlobals?: boolean
	ignoreDeclarationMerge?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-redeclare', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
