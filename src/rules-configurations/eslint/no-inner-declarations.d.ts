import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("functions" | "both"))[]

type Configuration = RuleConfiguration<'no-inner-declarations', 'eslint', Options>

export default Configuration
