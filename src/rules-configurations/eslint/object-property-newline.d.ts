import { RuleConfiguration } from '../../../support/Rule'

export type Options = ({
	allowAllPropertiesOnSameLine?: boolean
	allowMultiplePropertiesPerLine?: boolean
})[]

type Configuration = RuleConfiguration<'object-property-newline', 'eslint', Options>

export default Configuration
