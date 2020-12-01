export const noPlusplus = {
	id: 'no-plusplus',
	key: 'no-plusplus',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the unary operators `++` and `--`',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-plusplus'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowForLoopAfterthoughts: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedUnaryOp: 'Unary operator ‘{{operator}}’ used.'
		}
	}
}