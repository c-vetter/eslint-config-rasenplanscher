import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-magic-numbers.d'

export type Options = ({
	detectObjects?: boolean
	enforceConst?: boolean
	ignore?: (number | string)[]
	ignoreArrayIndexes?: boolean
	ignoreDefaultValues?: boolean
	ignoreNumericLiteralTypes?: boolean
	ignoreEnums?: boolean
	ignoreReadonlyClassProperties?: boolean
})[]

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-magic-numbers', '@typescript-eslint/eslint-plugin', Options>

export default Configuration
