export const noUselessConcat = {
	id: 'no-useless-concat',
	key: 'no-useless-concat',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary concatenation of literals or template literals',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-concat'
		},
		schema: [],
		messages: {
			unexpectedConcat: 'Unexpected string concatenation of literals.'
		}
	}
}