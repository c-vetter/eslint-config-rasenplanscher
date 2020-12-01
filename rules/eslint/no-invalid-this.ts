export const noInvalidThis = {
	id: 'no-invalid-this',
	key: 'no-invalid-this',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `this` keywords outside of classes or class-like objects',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-invalid-this'
		},
		schema: [
			{
				type: 'object',
				properties: {
					capIsConstructor: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedThis: 'Unexpected ‘this’.'
		}
	}
}