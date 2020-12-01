export const requireYield = {
	id: 'require-yield',
	key: 'require-yield',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require generator functions to contain `yield`',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/require-yield'
		},
		schema: [],
		messages: {
			missingYield: 'This generator function does not have ‘yield’.'
		}
	}
}