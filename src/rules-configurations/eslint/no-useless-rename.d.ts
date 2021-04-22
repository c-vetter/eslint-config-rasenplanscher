import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	ignoreDestructuring?: boolean
	ignoreImport?: boolean
	ignoreExport?: boolean
})[]

type Configuration = RuleConfiguration<'no-useless-rename', Options>

export default Configuration