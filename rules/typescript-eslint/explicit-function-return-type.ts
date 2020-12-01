export const typescriptEslintExplicitFunctionReturnType = {
	id: '@typescript-eslint/explicit-function-return-type',
	key: 'explicit-function-return-type',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Require explicit return types on functions and class methods',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md'
		},
		messages: {
			missingReturnType: 'Missing return type on function.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowExpressions: {
						type: 'boolean'
					},
					allowTypedFunctionExpressions: {
						type: 'boolean'
					},
					allowHigherOrderFunctions: {
						type: 'boolean'
					},
					allowDirectConstAssertionInArrowFunctions: {
						type: 'boolean'
					},
					allowConciseArrowFunctionExpressionsStartingWithVoid: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}