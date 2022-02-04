import { RuleConfiguration } from '../../../support/Rule'

export type Options = never[]

type Configuration = RuleConfiguration<'no-unreachable', 'eslint', Options>

export default Configuration
