export const requireAtomicUpdates = {
	id: 'require-atomic-updates',
	key: 'require-atomic-updates',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow assignments that can lead to race conditions due to usage of `await` or `yield`',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/require-atomic-updates'
		},
		fixable: null,
		schema: [],
		messages: {
			nonAtomicUpdate: 'Possible race condition: `{{value}}` might be reassigned based on an outdated value of `{{value}}`.'
		}
	}
}