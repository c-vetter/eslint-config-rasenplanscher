import { RuleConfiguration } from '../../../support/Rule'

export type Options = ((("always" | "never" | "consecutive") | {
	separateRequires?: boolean
	"var"?: "always" | "never" | "consecutive"
	"let"?: "always" | "never" | "consecutive"
	"const"?: "always" | "never" | "consecutive"
} | {
	initialized?: "always" | "never" | "consecutive"
	uninitialized?: "always" | "never" | "consecutive"
}))[]

type Configuration = RuleConfiguration<'one-var', 'eslint', Options>

export default Configuration
