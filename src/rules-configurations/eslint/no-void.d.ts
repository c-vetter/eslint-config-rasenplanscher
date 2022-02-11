import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowAsStatement?: boolean
})[]

type Configuration = RuleConfiguration<'no-void', 'eslint', Options>

export default Configuration
