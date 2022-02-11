import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowComputed?: boolean
})[]

type Configuration = RuleConfiguration<'import/namespace', 'eslint-plugin-import', Options>

export default Configuration
