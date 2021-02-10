import { RuleConfiguration } from '../../../support/Rule'

type Options = ((("tab") | number) | {
	SwitchCase?: number
	VariableDeclarator?: (number | ("first" | "off")) | {
		"var"?: number | ("first" | "off")
		"let"?: number | ("first" | "off")
		"const"?: number | ("first" | "off")
	}
	outerIIFEBody?: number | ("off")
	MemberExpression?: number | ("off")
	FunctionDeclaration?: {
		parameters?: number | ("first" | "off")
		body?: number
	}
	FunctionExpression?: {
		parameters?: number | ("first" | "off")
		body?: number
	}
	CallExpression?: {
		arguments?: number | ("first" | "off")
	}
	ArrayExpression?: number | ("first" | "off")
	ObjectExpression?: number | ("first" | "off")
	ImportDeclaration?: number | ("first" | "off")
	flatTernaryExpressions?: boolean
	offsetTernaryExpressions?: boolean
	ignoredNodes?: string[]
	ignoreComments?: boolean
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration
