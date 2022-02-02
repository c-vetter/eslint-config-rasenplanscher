import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	builtinGlobals?: boolean
})[]

type Configuration = RuleConfiguration<'no-redeclare', 'eslint', Options>

export default Configuration
