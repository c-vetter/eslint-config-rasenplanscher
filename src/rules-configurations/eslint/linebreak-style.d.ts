import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("unix" | "windows"))[]

type Configuration = RuleConfiguration<'linebreak-style', 'eslint', Options>

export default Configuration
