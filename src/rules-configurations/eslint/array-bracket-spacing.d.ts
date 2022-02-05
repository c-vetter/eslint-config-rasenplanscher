import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "never") | {
	singleValue?: boolean
	objectsInArrays?: boolean
	arraysInArrays?: boolean
})[]

type Configuration = RuleConfiguration<'array-bracket-spacing', 'eslint', Options>

export default Configuration