import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = (("always" | "ignorePackages" | "never"))[] | (("always" | "ignorePackages" | "never") | {
	pattern?: object
	ignorePackages?: boolean
})[] | ({
	pattern?: object
	ignorePackages?: boolean
})[] | (object)[] | (("always" | "ignorePackages" | "never") | object)[]

type Configuration = RuleConfiguration<'import/extensions', 'eslint-plugin-import', Options>

export default Configuration
