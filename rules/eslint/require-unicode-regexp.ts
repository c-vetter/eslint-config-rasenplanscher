export const requireUnicodeRegexp = {
	id: 'require-unicode-regexp',
	key: 'require-unicode-regexp',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce the use of `u` flag on RegExp',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/require-unicode-regexp'
		},
		messages: {
			requireUFlag: 'Use the ‘u’ flag.'
		},
		schema: []
	}
}