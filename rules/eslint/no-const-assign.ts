export const noConstAssign = {
	id: 'no-const-assign',
	key: 'no-const-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow reassigning `const` variables',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-const-assign'
		},
		schema: [],
		messages: {
			const: '‘{{name}}’ is constant.'
		}
	}
}