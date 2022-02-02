import { RuleConfiguration } from '../../../support/Rule'

export type Options = never[]

type Configuration = RuleConfiguration<'no-this-before-super', 'eslint', Options>

export default Configuration
