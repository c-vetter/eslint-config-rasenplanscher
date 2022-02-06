import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "as-needed"))[]

type Configuration = RuleConfiguration<'radix', 'eslint', Options>

export default Configuration
