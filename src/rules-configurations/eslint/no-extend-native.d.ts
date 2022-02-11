import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	exceptions?: string[]
})[]

type Configuration = RuleConfiguration<'no-extend-native', 'eslint', Options>

export default Configuration
