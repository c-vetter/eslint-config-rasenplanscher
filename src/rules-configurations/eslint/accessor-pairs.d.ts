import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	getWithoutSet?: boolean
	setWithoutGet?: boolean
	enforceForClassMembers?: boolean
})[]

type Configuration = RuleConfiguration<'accessor-pairs', 'eslint', Options>

export default Configuration
