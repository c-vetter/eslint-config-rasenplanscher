export const noDuplicateCase = {
	id: 'no-duplicate-case',
	key: 'no-duplicate-case',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow duplicate case labels',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-duplicate-case'
		},
		schema: [],
		messages: {
			unexpected: 'Duplicate case label.'
		}
	}
}