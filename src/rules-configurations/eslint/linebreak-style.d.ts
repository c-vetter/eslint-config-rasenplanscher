import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("unix" | "windows"))[]

type Configuration = RuleConfiguration<'linebreak-style', 'eslint', Options>

export default Configuration
