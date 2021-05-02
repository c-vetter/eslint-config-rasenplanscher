import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/brace-style.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/brace-style', '@typescript-eslint/eslint-plugin'>

export default Configuration