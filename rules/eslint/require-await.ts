export const requireAwait = {
	id: 'require-await',
	key: 'require-await',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow async functions which have no `await` expression',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/require-await'
		},
		schema: [],
		messages: {
			missingAwait: '{{name}} has no ‘await’ expression.'
		}
	}
}