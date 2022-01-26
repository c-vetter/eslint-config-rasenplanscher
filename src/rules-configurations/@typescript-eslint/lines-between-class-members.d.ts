import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/lines-between-class-members.d'

type Options = any

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/lines-between-class-members', '@typescript-eslint/eslint-plugin', Options>

export default Configuration