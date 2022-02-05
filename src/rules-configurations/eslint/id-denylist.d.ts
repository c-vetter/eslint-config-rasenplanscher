import { RuleConfiguration } from '../../../support/Rule'

export type Options = string[]

type Configuration = RuleConfiguration<'id-denylist', 'eslint', Options>

export default Configuration
