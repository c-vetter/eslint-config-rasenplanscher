import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "never"))[]

type Configuration = RuleConfiguration<'rest-spread-spacing', 'eslint', Options>

export default Configuration
