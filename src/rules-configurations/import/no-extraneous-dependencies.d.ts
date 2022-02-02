import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	devDependencies?: boolean | any
	optionalDependencies?: boolean | any
	peerDependencies?: boolean | any
	bundledDependencies?: boolean | any
	packageDir?: string | any
})[]

type Configuration = RuleConfiguration<'import/no-extraneous-dependencies', 'eslint-plugin-import', Options>

export default Configuration
