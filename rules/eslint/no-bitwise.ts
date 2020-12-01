export const noBitwise = {
	id: 'no-bitwise',
	key: 'no-bitwise',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow bitwise operators',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-bitwise'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						type: 'array',
						items: {
							enum: [
								'^',
								'|',
								'&',
								'<<',
								'>>',
								'>>>',
								'^=',
								'|=',
								'&=',
								'<<=',
								'>>=',
								'>>>=',
								'~'
							]
						},
						uniqueItems: true
					},
					int32Hint: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'Unexpected use of ‘{{operator}}’.'
		}
	}
}