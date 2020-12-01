export const noProcessEnv = {
	id: 'no-process-env',
	key: 'no-process-env',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `process.env`',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-process-env'
		},
		schema: [],
		messages: {
			unexpectedProcessEnv: 'Unexpected use of process.env.'
		}
	}
}