import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never"))[]

type Configuration = RuleConfiguration<'new-parens', 'eslint', Options>

export default Configuration
