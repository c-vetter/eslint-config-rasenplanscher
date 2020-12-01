export const defaultCase = {
	id: 'default-case',
	key: 'default-case',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `default` cases in `switch` statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/default-case'
		},
		schema: [
			{
				type: 'object',
				properties: {
					commentPattern: {
						type: 'string'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingDefaultCase: 'Expected a default case.'
		}
	}
}