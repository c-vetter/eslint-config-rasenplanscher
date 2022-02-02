import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/space-infix-ops.d'

export type Options = ({
	int32Hint?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/space-infix-ops', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
