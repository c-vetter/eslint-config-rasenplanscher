import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	commentPattern?: string
})[]

type Configuration = RuleConfiguration<'default-case', 'eslint', Options>

export default Configuration
