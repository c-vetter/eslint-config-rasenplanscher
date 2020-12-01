export const noReturnAwait = {
	id: 'no-return-await',
	key: 'no-return-await',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary `return await`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-return-await'
		},
		fixable: null,
		schema: [],
		messages: {
			redundantUseOfAwait: 'Redundant use of `await` on a return value.'
		}
	}
}