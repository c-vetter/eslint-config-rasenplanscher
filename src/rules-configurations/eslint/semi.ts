import { IMPORTANT } from '../../priorities'
import semi from '../../.rules-definitions/eslint/semi'

export default {
	rule: semi,
	priority: IMPORTANT,
	activate: true,
	options: [
		'never',
		{
			beforeStatementContinuationChars: 'never',
		},
	],
}
