import { RuleConfiguration } from '../../../support/Rule.d'

export type Options = ({
	allowComparingNullableBooleansToTrue?: boolean
	allowComparingNullableBooleansToFalse?: boolean
})[]

type Configuration = RuleConfiguration<'@typescript-eslint/no-unnecessary-boolean-literal-compare', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
