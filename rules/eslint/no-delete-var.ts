export const noDeleteVar = {
	id: 'no-delete-var',
	key: 'no-delete-var',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow deleting variables',
			category: 'Variables',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-delete-var'
		},
		schema: [],
		messages: {
			unexpected: 'Variables should not be deleted.'
		}
	}
}