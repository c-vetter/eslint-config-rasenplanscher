import { RuleConfiguration } from '../../../support/Rule'

export type Options = never[]

type Configuration = RuleConfiguration<'no-shadow-restricted-names', 'eslint', Options>

export default Configuration
