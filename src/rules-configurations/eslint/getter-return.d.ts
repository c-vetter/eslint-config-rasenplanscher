import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowImplicit?: boolean
})[]

type Configuration = RuleConfiguration<'getter-return', 'eslint', Options>

export default Configuration
