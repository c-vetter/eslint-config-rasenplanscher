import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowIndentationTabs?: boolean
})[]

type Configuration = RuleConfiguration<'no-tabs', 'eslint', Options>

export default Configuration
