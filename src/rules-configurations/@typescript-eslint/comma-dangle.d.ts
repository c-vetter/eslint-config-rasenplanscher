import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/comma-dangle.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/comma-dangle', '@typescript-eslint/eslint-plugin'>

export default Configuration