import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods")[]
})[]

type Configuration = RuleConfiguration<'no-empty-function', 'eslint', Options>

export default Configuration
