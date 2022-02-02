import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	checkLoops?: boolean
})[]

type Configuration = RuleConfiguration<'no-constant-condition', 'eslint', Options>

export default Configuration
