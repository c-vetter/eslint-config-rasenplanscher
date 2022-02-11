import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = string[]

type Configuration = RuleConfiguration<'id-denylist', 'eslint', Options>

export default Configuration
