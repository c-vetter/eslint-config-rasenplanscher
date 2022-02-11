import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "never" | "unix" | "windows"))[]

type Configuration = RuleConfiguration<'eol-last', 'eslint', Options>

export default Configuration
