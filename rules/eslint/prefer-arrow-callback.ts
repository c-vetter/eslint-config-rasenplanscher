export const preferArrowCallback = {
	id: 'prefer-arrow-callback',
	key: 'prefer-arrow-callback',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require using arrow functions for callbacks',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-arrow-callback'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowNamedFunctions: {
						type: 'boolean',
						default: false
					},
					allowUnboundThis: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			preferArrowCallback: 'Unexpected function expression.'
		}
	}
}