import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	newIsCap?: boolean
	capIsNew?: boolean
	newIsCapExceptions?: string[]
	newIsCapExceptionPattern?: string
	capIsNewExceptions?: string[]
	capIsNewExceptionPattern?: string
	properties?: boolean
})[]

type Configuration = RuleConfiguration<'new-cap', 'eslint', Options>

export default Configuration