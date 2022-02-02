import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-dupe-class-members.d'

type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-dupe-class-members', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
