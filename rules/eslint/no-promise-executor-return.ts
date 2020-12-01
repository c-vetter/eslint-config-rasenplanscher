export const noPromiseExecutorReturn = {
	id: 'no-promise-executor-return',
	key: 'no-promise-executor-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow returning values from Promise executor functions',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-promise-executor-return'
		},
		schema: [],
		messages: {
			returnsValue: 'Return values from promise executor functions cannot be read.'
		}
	}
}