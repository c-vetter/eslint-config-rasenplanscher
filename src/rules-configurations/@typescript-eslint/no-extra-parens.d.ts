import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-extra-parens.d'

type Options = (("functions"))[] | (("all") | {
	conditionalAssign?: boolean
	nestedBinaryExpressions?: boolean
	returnAssign?: boolean
	ignoreJSX?: "none" | "all" | "single-line" | "multi-line"
	enforceForArrowConditionals?: boolean
	enforceForSequenceExpressions?: boolean
	enforceForNewInMemberExpressions?: boolean
	enforceForFunctionPrototypeMethods?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-extra-parens', '@typescript-eslint/eslint-plugin', Options>

export default Configuration