import { RuleConfiguration } from '../../../support/Rule'

type Options = (("last" | "first"))[]

type Configuration = RuleConfiguration<'semi-style', 'eslint', Options>

export default Configuration