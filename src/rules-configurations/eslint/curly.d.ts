import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("all"))[] | (("multi" | "multi-line" | "multi-or-nest") | ("consistent"))[]

type Configuration = RuleConfiguration<'curly', 'eslint', Options>

export default Configuration
