export const noExtraLabel = {
	id: 'no-extra-label',
	key: 'no-extra-label',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary labels',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-extra-label'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unexpected: 'This label ‘{{name}}’ is unnecessary.'
		}
	}
}