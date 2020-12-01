export const noNew = {
	id: 'no-new',
	key: 'no-new',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `new` operators outside of assignments or comparisons',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-new'
		},
		schema: [],
		messages: {
			noNewStatement: 'Do not use ‘new’ for side effects.'
		}
	}
}