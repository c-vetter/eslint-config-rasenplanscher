import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allowEmptyCatch?: boolean
})[]

type Configuration = RuleConfiguration<'no-empty', 'eslint', Options>

export default Configuration
