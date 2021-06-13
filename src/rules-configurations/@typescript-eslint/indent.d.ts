import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/indent.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/indent', '@typescript-eslint/eslint-plugin'>

export default Configuration