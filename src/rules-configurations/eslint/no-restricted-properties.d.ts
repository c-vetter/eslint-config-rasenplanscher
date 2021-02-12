import { RuleConfiguration } from '../../../support/Rule'

type Options = ({
	"object": string
	property?: string
	message?: string
} | {
	"object"?: string
	property: string
	message?: string
})[]

type Configuration = RuleConfiguration<Options>

export default Configuration