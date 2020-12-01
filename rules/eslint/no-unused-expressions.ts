export const noUnusedExpressions = {
	id: 'no-unused-expressions',
	key: 'no-unused-expressions',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unused expressions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-unused-expressions'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowShortCircuit: {
						type: 'boolean',
						default: false
					},
					allowTernary: {
						type: 'boolean',
						default: false
					},
					allowTaggedTemplates: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unusedExpression: 'Expected an assignment or function call and instead saw an expression.'
		}
	}
}