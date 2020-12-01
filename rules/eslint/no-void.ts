export const noVoid = {
	id: 'no-void',
	key: 'no-void',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `void` operators',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-void'
		},
		messages: {
			noVoid: 'Expected ‘undefined’ and instead saw ‘void’.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowAsStatement: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		]
	}
}