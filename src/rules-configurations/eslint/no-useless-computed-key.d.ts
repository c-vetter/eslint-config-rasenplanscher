import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	enforceForClassMembers?: boolean
})[]

type Configuration = RuleConfiguration<'no-useless-computed-key', 'eslint', Options>

export default Configuration
