import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/func-call-spacing.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/func-call-spacing', '@typescript-eslint/eslint-plugin'>

export default Configuration