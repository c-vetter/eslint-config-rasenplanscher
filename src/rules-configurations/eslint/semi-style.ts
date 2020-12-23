import { TASTE } from '../../priorities'
import semiStyle from '../../.rules-definitions/eslint/semi-style'

export default {
	rule: semiStyle,
	priority: TASTE,
	activate: true,
	options: [
		'first'
	],
}
