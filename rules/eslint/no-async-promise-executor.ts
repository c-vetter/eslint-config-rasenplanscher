export const noAsyncPromiseExecutor = {
	id: 'no-async-promise-executor',
	key: 'no-async-promise-executor',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow using an async function as a Promise executor',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-async-promise-executor'
		},
		fixable: null,
		schema: [],
		messages: {
			async: 'Promise executor functions should not be async.'
		}
	}
}