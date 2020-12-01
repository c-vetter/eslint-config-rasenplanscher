export const noEmptyPattern = {
	id: 'no-empty-pattern',
	key: 'no-empty-pattern',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow empty destructuring patterns',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-empty-pattern'
		},
		schema: [],
		messages: {
			unexpected: 'Unexpected empty {{type}} pattern.'
		}
	}
}