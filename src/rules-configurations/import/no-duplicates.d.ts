import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	considerQueryString?: boolean
})[]

type Configuration = RuleConfiguration<'import/no-duplicates', 'eslint-plugin-import', Options>

export default Configuration
