export const noConstantCondition = {
	id: 'no-constant-condition',
	key: 'no-constant-condition',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow constant expressions in conditions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-constant-condition'
		},
		schema: [
			{
				type: 'object',
				properties: {
					checkLoops: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'Unexpected constant condition.'
		}
	}
}