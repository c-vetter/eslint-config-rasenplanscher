export const noMultiSpaces = {
	id: 'no-multi-spaces',
	key: 'no-multi-spaces',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow multiple spaces',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-multi-spaces'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'object',
						patternProperties: {
							'^([A-Z][a-z]*)+$': {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					ignoreEOLComments: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			multipleSpaces: 'Multiple spaces found before ‘{{displayValue}}’.'
		}
	}
}