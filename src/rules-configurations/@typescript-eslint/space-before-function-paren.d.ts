import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/space-before-function-paren.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/space-before-function-paren', '@typescript-eslint/eslint-plugin'>

export default Configuration