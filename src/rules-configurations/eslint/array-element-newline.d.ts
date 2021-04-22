import { RuleConfiguration } from '../../../support/Rule'

type BasicConfig = ("always" | "never" | "consistent") | {
	multiline?: boolean
	minItems?: number | null
}

export type Options = ((BasicConfig | {
	ArrayExpression?: BasicConfig
	ArrayPattern?: BasicConfig
}))[]

type Configuration = RuleConfiguration<'array-element-newline', Options>

export default Configuration