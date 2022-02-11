import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always"))[] | (("never") | {
	ignoreForLoopInit?: boolean
})[]

type Configuration = RuleConfiguration<'init-declarations', 'eslint', Options>

export default Configuration
