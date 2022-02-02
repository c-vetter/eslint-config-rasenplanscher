import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("all"))[] | (("multi" | "multi-line" | "multi-or-nest") | ("consistent"))[]

type Configuration = RuleConfiguration<'curly', 'eslint', Options>

export default Configuration
