import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("object" | "property"))[]

type Configuration = RuleConfiguration<'dot-location', 'eslint', Options>

export default Configuration
