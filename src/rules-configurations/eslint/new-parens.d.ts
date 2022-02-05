import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "never"))[]

type Configuration = RuleConfiguration<'new-parens', 'eslint', Options>

export default Configuration
