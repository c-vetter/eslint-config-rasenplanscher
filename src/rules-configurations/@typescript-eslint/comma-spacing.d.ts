import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/comma-spacing.d'

type Options = ({
	before?: boolean
	after?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/comma-spacing', '@typescript-eslint/eslint-plugin', Options>

export default Configuration