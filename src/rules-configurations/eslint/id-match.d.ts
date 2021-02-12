import { RuleConfiguration } from '../../../support/Rule'

type Options = (string | {
	properties?: boolean
	onlyDeclarations?: boolean
	ignoreDestructuring?: boolean
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration