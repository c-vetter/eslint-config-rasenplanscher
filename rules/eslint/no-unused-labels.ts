export const noUnusedLabels = {
	id: 'no-unused-labels',
	key: 'no-unused-labels',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unused labels',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-unused-labels'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unused: '‘{{name}}:’ is defined but never used.'
		}
	}
}