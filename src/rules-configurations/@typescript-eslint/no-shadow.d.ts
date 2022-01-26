import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-shadow.d'

type Options = ({
	builtinGlobals?: boolean
	hoist?: "all" | "functions" | "never"
	allow?: string[]
	ignoreTypeValueShadow?: boolean
	ignoreFunctionTypeParameterNameValueShadow?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-shadow', '@typescript-eslint/eslint-plugin', Options>

export default Configuration