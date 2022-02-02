import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "never" | "unix" | "windows"))[]

type Configuration = RuleConfiguration<'eol-last', 'eslint', Options>

export default Configuration
