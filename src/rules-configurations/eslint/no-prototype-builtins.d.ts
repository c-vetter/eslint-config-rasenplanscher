import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = never[]

type Configuration = RuleConfiguration<'no-prototype-builtins', 'eslint', Options>

export default Configuration
