export const noExtraBooleanCast = {
	id: 'no-extra-boolean-cast',
	key: 'no-extra-boolean-cast',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary boolean casts',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-extra-boolean-cast'
		},
		schema: [
			{
				type: 'object',
				properties: {
					enforceForLogicalOperands: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			unexpectedCall: 'Redundant Boolean call.',
			unexpectedNegation: 'Redundant double negation.'
		}
	}
}