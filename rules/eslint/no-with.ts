export const noWith = {
	id: 'no-with',
	key: 'no-with',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `with` statements',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-with'
		},
		schema: [],
		messages: {
			unexpectedWith: 'Unexpected use of ‘with’ statement.'
		}
	}
}