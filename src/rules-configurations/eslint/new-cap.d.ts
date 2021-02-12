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

type Configuration = RuleConfiguration<Options>

export default Configuration