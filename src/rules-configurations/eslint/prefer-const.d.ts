import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	destructuring?: "any" | "all"
	ignoreReadBeforeAssign?: boolean
})[]

type Configuration = RuleConfiguration<'prefer-const', 'eslint', Options>

export default Configuration
