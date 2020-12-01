export const noUnsafeFinally = {
	id: 'no-unsafe-finally',
	key: 'no-unsafe-finally',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow control flow statements in `finally` blocks',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-unsafe-finally'
		},
		schema: [],
		messages: {
			unsafeUsage: 'Unsafe usage of {{nodeType}}.'
		}
	}
}