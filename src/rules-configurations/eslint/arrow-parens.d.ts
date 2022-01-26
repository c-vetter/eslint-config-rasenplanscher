import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always" | "as-needed") | {
	requireForBlockBody?: boolean
})[]

type Configuration = RuleConfiguration<'arrow-parens', 'eslint', Options>

export default Configuration