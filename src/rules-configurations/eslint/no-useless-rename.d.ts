import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	ignoreDestructuring?: boolean
	ignoreImport?: boolean
	ignoreExport?: boolean
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration