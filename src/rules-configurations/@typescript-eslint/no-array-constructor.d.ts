import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-array-constructor.d'

type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-array-constructor', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
