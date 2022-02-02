import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "initializations"))[]

type Configuration = RuleConfiguration<'one-var-declaration-per-line', 'eslint', Options>

export default Configuration
