import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	ignoreDestructuring?: boolean
	ignoreImport?: boolean
	ignoreExport?: boolean
})[]

type Configuration = RuleConfiguration<'no-useless-rename', 'eslint', Options>

export default Configuration
