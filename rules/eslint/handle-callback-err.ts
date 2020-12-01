export const handleCallbackErr = {
	id: 'handle-callback-err',
	key: 'handle-callback-err',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'require error handling in callbacks',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/handle-callback-err'
		},
		schema: [
			{
				type: 'string'
			}
		],
		messages: {
			expected: 'Expected error to be handled.'
		}
	}
}