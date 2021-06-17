import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-unused-vars.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, 'unused-imports/no-unused-vars', 'eslint-plugin-unused-imports'>

export default Configuration
