export const spaceUnaryOps = {
	id: 'space-unary-ops',
	key: 'space-unary-ops',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing before or after unary operators',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/space-unary-ops'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					words: {
						type: 'boolean',
						default: true
					},
					nonwords: {
						type: 'boolean',
						default: false
					},
					overrides: {
						type: 'object',
						additionalProperties: {
							type: 'boolean'
						}
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedBefore: 'Unexpected space before unary operator ‘{{operator}}’.',
			unexpectedAfter: 'Unexpected space after unary operator ‘{{operator}}’.',
			unexpectedAfterWord: 'Unexpected space after unary word operator ‘{{word}}’.',
			wordOperator: 'Unary word operator ‘{{word}}’ must be followed by whitespace.',
			operator: 'Unary operator ‘{{operator}}’ must be followed by whitespace.',
			beforeUnaryExpressions: 'Space is required before unary expressions ‘{{token}}’.'
		}
	}
}