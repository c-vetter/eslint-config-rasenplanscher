export const callbackReturn = {
	id: 'callback-return',
	key: 'callback-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'require `return` statements after callbacks',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/callback-return'
		},
		schema: [
			{
				type: 'array',
				items: {
					type: 'string'
				}
			}
		],
		messages: {
			missingReturn: 'Expected return with your callback function.'
		}
	}
}