export const defaultParamLast = {
	id: 'default-param-last',
	key: 'default-param-last',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce default parameters to be last',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/default-param-last'
		},
		schema: [],
		messages: {
			shouldBeLast: 'Default parameters should be last.'
		}
	}
}