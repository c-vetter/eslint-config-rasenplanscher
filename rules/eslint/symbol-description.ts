export const symbolDescription = {
	id: 'symbol-description',
	key: 'symbol-description',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require symbol descriptions',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/symbol-description'
		},
		fixable: null,
		schema: [],
		messages: {
			expected: 'Expected Symbol to have a description.'
		}
	}
}