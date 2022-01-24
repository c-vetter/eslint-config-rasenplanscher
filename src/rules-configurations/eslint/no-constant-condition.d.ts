import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	checkLoops?: boolean
})[]

type Configuration = RuleConfiguration<'no-constant-condition', 'eslint', Options>

export default Configuration