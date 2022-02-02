import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "never"))[]

type Configuration = RuleConfiguration<'block-spacing', 'eslint', Options>

export default Configuration
