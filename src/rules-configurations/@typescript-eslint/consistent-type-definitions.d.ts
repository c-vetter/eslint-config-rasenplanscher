import { RuleConfiguration } from '../../../support/Rule'

export type Options = (("interface" | "type"))[]

type Configuration = RuleConfiguration<'@typescript-eslint/consistent-type-definitions', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
