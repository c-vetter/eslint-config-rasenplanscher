import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-invalid-this.d'

export type Options = ({
	capIsConstructor?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-invalid-this', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
