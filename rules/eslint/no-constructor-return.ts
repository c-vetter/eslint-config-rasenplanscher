export const noConstructorReturn = {
	id: 'no-constructor-return',
	key: 'no-constructor-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow returning value from constructor',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-constructor-return'
		},
		schema: {},
		fixable: null,
		messages: {
			unexpected: 'Unexpected return statement in constructor.'
		}
	}
}