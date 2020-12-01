export const typescriptEslintPromiseFunctionAsync = {
	id: '@typescript-eslint/promise-function-async',
	key: 'promise-function-async',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Requires any function or method that returns a Promise to be marked async',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/promise-function-async.md'
		},
		messages: {
			missingAsync: 'Functions that return promises must be async.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowAny: {
						type: 'boolean'
					},
					allowedPromiseNames: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					checkArrowFunctions: {
						type: 'boolean'
					},
					checkFunctionDeclarations: {
						type: 'boolean'
					},
					checkFunctionExpressions: {
						type: 'boolean'
					},
					checkMethodDeclarations: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}