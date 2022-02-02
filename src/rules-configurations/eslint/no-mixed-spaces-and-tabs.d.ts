import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("smart-tabs" | "true" | "false"))[]

type Configuration = RuleConfiguration<'no-mixed-spaces-and-tabs', 'eslint', Options>

export default Configuration
