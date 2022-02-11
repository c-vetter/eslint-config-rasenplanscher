import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowProperties?: boolean
})[]

type Configuration = RuleConfiguration<'require-atomic-updates', 'eslint', Options>

export default Configuration
