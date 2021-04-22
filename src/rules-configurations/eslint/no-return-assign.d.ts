import { RuleConfiguration } from '../../../support/Rule'

type Options = (("except-parens" | "always"))[]

type Configuration = RuleConfiguration<'no-return-assign', Options>

export default Configuration