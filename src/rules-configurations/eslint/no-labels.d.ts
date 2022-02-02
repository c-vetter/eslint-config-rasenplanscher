import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowLoop?: boolean
	allowSwitch?: boolean
})[]

type Configuration = RuleConfiguration<'no-labels', 'eslint', Options>

export default Configuration
