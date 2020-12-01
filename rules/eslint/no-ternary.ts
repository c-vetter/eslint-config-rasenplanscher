export const noTernary = {
	id: 'no-ternary',
	key: 'no-ternary',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow ternary operators',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-ternary'
		},
		schema: [],
		messages: {
			noTernaryOperator: 'Ternary operator used.'
		}
	}
}