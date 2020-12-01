export const typescriptEslintNoUnusedExpressions = {
	id: '@typescript-eslint/no-unused-expressions',
	key: 'no-unused-expressions',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow unused expressions',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unused-expressions.md'
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