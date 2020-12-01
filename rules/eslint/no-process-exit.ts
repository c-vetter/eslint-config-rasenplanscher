export const noProcessExit = {
	id: 'no-process-exit',
	key: 'no-process-exit',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `process.exit()`',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-process-exit'
		},
		schema: [],
		messages: {
			noProcessExit: 'Don't use process.exit(); throw an error instead.'
		}
	}
}