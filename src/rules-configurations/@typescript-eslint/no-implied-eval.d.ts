import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-implied-eval.d'

export type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-implied-eval', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
