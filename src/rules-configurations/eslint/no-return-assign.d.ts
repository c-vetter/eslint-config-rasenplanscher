import { RuleConfiguration } from '../../../support/Rule'

type Options = (("except-parens" | "always"))[]

type Configuration = RuleConfiguration<Options>

export default Configuration