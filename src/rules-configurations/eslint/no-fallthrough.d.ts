import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	commentPattern?: string
})[]

type Configuration = RuleConfiguration<'no-fallthrough', 'eslint', Options>

export default Configuration
