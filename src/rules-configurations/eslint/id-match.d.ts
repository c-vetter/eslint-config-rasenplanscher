import { RuleConfiguration } from '../../../support/Rule'

type Options = (string | {
	properties?: boolean
	onlyDeclarations?: boolean
	ignoreDestructuring?: boolean
})[]

type Configuration = RuleConfiguration<'id-match', Options>

export default Configuration