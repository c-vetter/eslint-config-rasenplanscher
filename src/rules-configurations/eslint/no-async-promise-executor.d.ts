import { RuleConfiguration } from '../../../support/Rule'

export type Options = never[]

type Configuration = RuleConfiguration<'no-async-promise-executor', 'eslint', Options>

export default Configuration
