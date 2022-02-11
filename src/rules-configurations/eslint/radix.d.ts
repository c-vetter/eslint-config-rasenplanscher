import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "as-needed"))[]

type Configuration = RuleConfiguration<'radix', 'eslint', Options>

export default Configuration
