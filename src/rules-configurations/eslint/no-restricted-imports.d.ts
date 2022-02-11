import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (string | {
	name: string
	message?: string
	importNames?: string[]
})[] | ({
	paths?: (string | {
		name: string
		message?: string
		importNames?: string[]
	})[]
	patterns?: string[] | {
		group: string[]
		message?: string
		caseSensitive?: boolean
	}[]
})[]

type Configuration = RuleConfiguration<'no-restricted-imports', 'eslint', Options>

export default Configuration
