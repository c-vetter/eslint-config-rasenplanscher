import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("functions"))[] | (("all") | {
	conditionalAssign?: boolean
	nestedBinaryExpressions?: boolean
	returnAssign?: boolean
	ignoreJSX?: "none" | "all" | "single-line" | "multi-line"
	enforceForArrowConditionals?: boolean
	enforceForSequenceExpressions?: boolean
	enforceForNewInMemberExpressions?: boolean
	enforceForFunctionPrototypeMethods?: boolean
})[]

type Configuration = RuleConfiguration<'no-extra-parens', 'eslint', Options>

export default Configuration
