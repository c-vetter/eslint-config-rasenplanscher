export const noInvalidRegexp = {
	id: 'no-invalid-regexp',
	key: 'no-invalid-regexp',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow invalid regular expression strings in `RegExp` constructors',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-invalid-regexp'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowConstructorFlags: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			regexMessage: '{{message}}.'
		}
	}
}