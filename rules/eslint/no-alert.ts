export const noAlert = {
	id: 'no-alert',
	key: 'no-alert',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `alert`, `confirm`, and `prompt`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-alert'
		},
		schema: [],
		messages: {
			unexpected: 'Unexpected {{name}}.'
		}
	}
}