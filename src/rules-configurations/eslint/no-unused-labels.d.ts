import { RuleConfiguration } from '../../../support/Rule'

export type Options = never[]

type Configuration = RuleConfiguration<'no-unused-labels', 'eslint', Options>

export default Configuration
