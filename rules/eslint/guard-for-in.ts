export const guardForIn = {
	id: 'guard-for-in',
	key: 'guard-for-in',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `for-in` loops to include an `if` statement',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/guard-for-in'
		},
		schema: [],
		messages: {
			wrap: 'The body of a for-in should be wrapped in an if statement to filter unwanted properties from the prototype.'
		}
	}
}