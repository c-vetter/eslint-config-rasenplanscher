import { RuleConfiguration } from '../../../support/Rule'

export type Options = (string)[]

type Configuration = RuleConfiguration<'node/handle-callback-err', 'eslint-plugin-node', Options>

export default Configuration
