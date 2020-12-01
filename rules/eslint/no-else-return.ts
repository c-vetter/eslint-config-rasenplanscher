export const noElseReturn = {
	id: 'no-else-return',
	key: 'no-else-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `else` blocks after `return` statements in `if` statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-else-return'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowElseIf: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			unexpected: 'Unnecessary ‘else’ after ‘return’.'
		}
	}
}