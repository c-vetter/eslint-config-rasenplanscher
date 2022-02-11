import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	enforceForSwitchCase?: boolean
	enforceForIndexOf?: boolean
})[]

type Configuration = RuleConfiguration<'use-isnan', 'eslint', Options>

export default Configuration
