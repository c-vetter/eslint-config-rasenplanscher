export const noMultiAssign = {
	id: 'no-multi-assign',
	key: 'no-multi-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow use of chained assignment expressions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-multi-assign'
		},
		schema: [],
		messages: {
			unexpectedChain: 'Unexpected chained assignment.'
		}
	}
}