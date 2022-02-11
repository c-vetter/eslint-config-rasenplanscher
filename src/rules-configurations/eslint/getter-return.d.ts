import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowImplicit?: boolean
})[]

type Configuration = RuleConfiguration<'getter-return', 'eslint', Options>

export default Configuration
