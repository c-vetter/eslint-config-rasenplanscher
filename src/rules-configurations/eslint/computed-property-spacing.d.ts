import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("always" | "never") | {
	enforceForClassMembers?: boolean
})[]

type Configuration = RuleConfiguration<'computed-property-spacing', 'eslint', Options>

export default Configuration