import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	exceptions?: string[]
})[]

type Configuration = RuleConfiguration<'no-global-assign', 'eslint', Options>

export default Configuration
