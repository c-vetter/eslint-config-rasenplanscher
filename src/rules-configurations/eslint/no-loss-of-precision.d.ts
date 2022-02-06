import { RuleConfiguration } from '../../../support/Rule'

export type Options = never[]

type Configuration = RuleConfiguration<'no-loss-of-precision', 'eslint', Options>

export default Configuration
