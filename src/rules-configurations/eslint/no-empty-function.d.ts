import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	allow?: ("functions" | "arrowFunctions" | "generatorFunctions" | "methods" | "generatorMethods" | "getters" | "setters" | "constructors" | "asyncFunctions" | "asyncMethods")[]
})[]

type Configuration = RuleConfiguration<'no-empty-function', 'eslint', Options>

export default Configuration
