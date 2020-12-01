export const noSequences = {
	id: 'no-sequences',
	key: 'no-sequences',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow comma operators',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-sequences'
		},
		schema: [],
		messages: {
			unexpectedCommaExpression: 'Unexpected use of comma operator.'
		}
	}
}