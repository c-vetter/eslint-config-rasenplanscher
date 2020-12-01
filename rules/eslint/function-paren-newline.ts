export const functionParenNewline = {
	id: 'function-paren-newline',
	key: 'function-paren-newline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent line breaks inside function parentheses',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/function-paren-newline'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'always',
							'never',
							'consistent',
							'multiline',
							'multiline-arguments'
						]
					},
					{
						type: 'object',
						properties: {
							minItems: {
								type: 'integer',
								minimum: 0
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			expectedBefore: 'Expected newline before ‘)’.',
			expectedAfter: 'Expected newline after ‘(’.',
			expectedBetween: 'Expected newline between arguments/params.',
			unexpectedBefore: 'Unexpected newline before ‘)’.',
			unexpectedAfter: 'Unexpected newline after ‘(’.'
		}
	}
}