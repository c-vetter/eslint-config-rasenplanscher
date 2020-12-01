export const noConsole = {
	id: 'no-console',
	key: 'no-console',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `console`',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-console'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						type: 'array',
						items: {
							type: 'string'
						},
						minItems: 1,
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'Unexpected console statement.'
		}
	}
}