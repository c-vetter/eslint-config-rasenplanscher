export const reactJsxCurlyNewline = {
	id: 'react/jsx-curly-newline',
	key: 'jsx-curly-newline',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforce consistent line breaks inside jsx curly',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'consistent',
							'never'
						]
					},
					{
						type: 'object',
						properties: {
							singleline: {
								enum: [
									'consistent',
									'require',
									'forbid'
								]
							},
							multiline: {
								enum: [
									'consistent',
									'require',
									'forbid'
								]
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			expectedBefore: 'Expected newline before ‘}’.',
			expectedAfter: 'Expected newline after ‘{’.',
			unexpectedBefore: 'Unexpected newline before ‘{’.',
			unexpectedAfter: 'Unexpected newline after ‘}’.'
		}
	}
}