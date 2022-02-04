import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-useless-constructor.d'

export type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-useless-constructor', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
