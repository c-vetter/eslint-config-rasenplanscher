import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	builtinGlobals?: boolean
	hoist?: "all" | "functions" | "never"
	allow?: string[]
})[]

type Configuration = RuleConfiguration<'no-shadow', 'eslint', Options>

export default Configuration