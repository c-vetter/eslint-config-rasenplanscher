export const noCaller = {
	id: 'no-caller',
	key: 'no-caller',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `arguments.caller` or `arguments.callee`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-caller'
		},
		schema: [],
		messages: {
			unexpected: 'Avoid arguments.{{prop}}.'
		}
	}
}