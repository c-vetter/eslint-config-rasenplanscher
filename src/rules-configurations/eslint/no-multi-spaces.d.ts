import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	exceptions?: object
	ignoreEOLComments?: boolean
})[]

type Configuration = RuleConfiguration<'no-multi-spaces', 'eslint', Options>

export default Configuration
