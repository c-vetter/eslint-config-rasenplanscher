import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	detectObjects?: boolean
	enforceConst?: boolean
	ignore?: (number | string)[]
	ignoreArrayIndexes?: boolean
	ignoreDefaultValues?: boolean
})[]

type Configuration = RuleConfiguration<'no-magic-numbers', 'eslint', Options>

export default Configuration
