export const noDebugger = {
	id: 'no-debugger',
	key: 'no-debugger',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow the use of `debugger`',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-debugger'
		},
		fixable: null,
		schema: [],
		messages: {
			unexpected: 'Unexpected ‘debugger’ statement.'
		}
	}
}