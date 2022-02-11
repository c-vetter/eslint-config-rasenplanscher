import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "never"))[]

type Configuration = RuleConfiguration<'template-curly-spacing', 'eslint', Options>

export default Configuration
