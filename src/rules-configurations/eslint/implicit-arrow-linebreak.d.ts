import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("beside" | "below"))[]

type Configuration = RuleConfiguration<'implicit-arrow-linebreak', 'eslint', Options>

export default Configuration
