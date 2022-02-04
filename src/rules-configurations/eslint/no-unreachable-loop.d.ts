import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	ignore?: ("WhileStatement" | "DoWhileStatement" | "ForStatement" | "ForInStatement" | "ForOfStatement")[]
})[]

type Configuration = RuleConfiguration<'no-unreachable-loop', 'eslint', Options>

export default Configuration
