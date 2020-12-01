export const newlinePerChainedCall = {
	id: 'newline-per-chained-call',
	key: 'newline-per-chained-call',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require a newline after each call in a method chain',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/newline-per-chained-call'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					ignoreChainWithDepth: {
						type: 'integer',
						minimum: 1,
						maximum: 10,
						default: 2
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			expected: 'Expected line break before `{{callee}}`.'
		}
	}
}