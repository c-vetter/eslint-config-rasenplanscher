import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	props?: boolean
})[]

type Configuration = RuleConfiguration<'no-self-assign', 'eslint', Options>

export default Configuration
