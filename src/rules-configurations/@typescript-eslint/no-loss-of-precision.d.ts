import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-loss-of-precision.d'

export type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-loss-of-precision', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
