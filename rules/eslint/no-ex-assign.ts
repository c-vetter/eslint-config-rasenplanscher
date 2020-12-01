export const noExAssign = {
	id: 'no-ex-assign',
	key: 'no-ex-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow reassigning exceptions in `catch` clauses',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-ex-assign'
		},
		schema: [],
		messages: {
			unexpected: 'Do not assign to the exception parameter.'
		}
	}
}