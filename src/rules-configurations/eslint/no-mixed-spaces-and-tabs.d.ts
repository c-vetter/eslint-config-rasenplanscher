import { RuleConfiguration } from '../../../support/Rule'

type Options = (("smart-tabs" | "true" | "false"))[]

type Configuration = RuleConfiguration<'no-mixed-spaces-and-tabs', Options>

export default Configuration