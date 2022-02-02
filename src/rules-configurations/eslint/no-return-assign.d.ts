import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("except-parens" | "always"))[]

type Configuration = RuleConfiguration<'no-return-assign', 'eslint', Options>

export default Configuration
