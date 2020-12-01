export const noExtraBind = {
	id: 'no-extra-bind',
	key: 'no-extra-bind',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary calls to `.bind()`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-extra-bind'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unexpected: 'The function binding is unnecessary.'
		}
	}
}