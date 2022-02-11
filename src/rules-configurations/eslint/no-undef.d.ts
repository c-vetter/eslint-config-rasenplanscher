import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	"typeof"?: boolean
})[]

type Configuration = RuleConfiguration<'no-undef', 'eslint', Options>

export default Configuration
