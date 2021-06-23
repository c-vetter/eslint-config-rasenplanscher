import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/space-infix-ops.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/space-infix-ops', '@typescript-eslint/eslint-plugin'>

export default Configuration