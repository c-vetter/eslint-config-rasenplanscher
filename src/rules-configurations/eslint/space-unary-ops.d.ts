import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	words?: boolean
	nonwords?: boolean
	overrides?: {
		[key: string]: boolean
	}
})[]

type Configuration = RuleConfiguration<'space-unary-ops', 'eslint', Options>

export default Configuration
