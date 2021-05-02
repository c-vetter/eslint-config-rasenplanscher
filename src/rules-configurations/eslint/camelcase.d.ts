import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	ignoreDestructuring?: boolean
	ignoreImports?: boolean
	ignoreGlobals?: boolean
	properties?: "always" | "never"
	allow?: (string)[]
})[]

type Configuration = RuleConfiguration<'camelcase', 'eslint', Options>

export default Configuration