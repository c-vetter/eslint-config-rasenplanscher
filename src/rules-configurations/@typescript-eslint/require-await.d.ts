import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/require-await.d'

export type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/require-await', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
