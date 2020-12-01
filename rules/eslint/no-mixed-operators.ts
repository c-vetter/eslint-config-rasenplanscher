export const noMixedOperators = {
	id: 'no-mixed-operators',
	key: 'no-mixed-operators',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow mixed binary operators',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-mixed-operators'
		},
		schema: [
			{
				type: 'object',
				properties: {
					groups: {
						type: 'array',
						items: {
							type: 'array',
							items: {
								enum: [
									'+',
									'-',
									'*',
									'/',
									'%',
									'**',
									'&',
									'|',
									'^',
									'~',
									'<<',
									'>>',
									'>>>',
									'==',
									'!=',
									'===',
									'!==',
									'>',
									'>=',
									'<',
									'<=',
									'&&',
									'||',
									'in',
									'instanceof',
									'?:',
									'??'
								]
							},
							minItems: 2,
							uniqueItems: true
						},
						uniqueItems: true
					},
					allowSamePrecedence: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedMixedOperator: 'Unexpected mix of ‘{{leftOperator}}’ and ‘{{rightOperator}}’.'
		}
	}
}