import { RuleConfiguration } from '../../../support/Rule'

type Options = (string | {
	properties?: boolean
	classFields?: boolean
	onlyDeclarations?: boolean
	ignoreDestructuring?: boolean
})[]

type Configuration = RuleConfiguration<'id-match', 'eslint', Options>

export default Configuration