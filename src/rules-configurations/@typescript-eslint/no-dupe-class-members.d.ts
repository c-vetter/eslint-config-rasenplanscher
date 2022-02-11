import { RuleConfigurationOverride } from '../../../support/Rule.d'
import BaseConfiguration from '../eslint/no-dupe-class-members.d'

export type Options = never[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-dupe-class-members', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
