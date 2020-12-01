export const noNegatedCondition = {
	id: 'no-negated-condition',
	key: 'no-negated-condition',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow negated conditions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-negated-condition'
		},
		schema: [],
		messages: {
			unexpectedNegated: 'Unexpected negated condition.'
		}
	}
}