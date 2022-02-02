import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-duplicate-imports.d'

type Options = ({
	includeExports?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-duplicate-imports', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
