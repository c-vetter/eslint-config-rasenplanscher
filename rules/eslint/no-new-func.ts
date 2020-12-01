export const noNewFunc = {
	id: 'no-new-func',
	key: 'no-new-func',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `new` operators with the `Function` object',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-new-func'
		},
		schema: [],
		messages: {
			noFunctionConstructor: 'The Function constructor is eval.'
		}
	}
}