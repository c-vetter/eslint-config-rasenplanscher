export const noUselessCall = {
	id: 'no-useless-call',
	key: 'no-useless-call',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary calls to `.call()` and `.apply()`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-call'
		},
		schema: [],
		messages: {
			unnecessaryCall: 'Unnecessary ‘.{{name}}()’.'
		}
	}
}