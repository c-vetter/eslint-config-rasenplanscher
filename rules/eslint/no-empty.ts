export const noEmpty = {
	id: 'no-empty',
	key: 'no-empty',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow empty block statements',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-empty'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowEmptyCatch: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'Empty {{type}} statement.'
		}
	}
}