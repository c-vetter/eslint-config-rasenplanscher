import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/quotes.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/quotes', '@typescript-eslint/eslint-plugin'>

export default Configuration