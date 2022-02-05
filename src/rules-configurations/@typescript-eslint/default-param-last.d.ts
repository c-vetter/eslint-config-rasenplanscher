import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/default-param-last.d'

export type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/default-param-last', '@typescript-eslint/eslint-plugin', Options>

export default Configuration