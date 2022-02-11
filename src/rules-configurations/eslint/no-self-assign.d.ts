import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	props?: boolean
})[]

type Configuration = RuleConfiguration<'no-self-assign', 'eslint', Options>

export default Configuration
