export const arrayCallbackReturn = {
	id: 'array-callback-return',
	key: 'array-callback-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'enforce `return` statements in callbacks of array methods',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/array-callback-return'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowImplicit: {
						type: 'boolean',
						default: false
					},
					checkForEach: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			expectedAtEnd: '{{arrayMethodName}}() expects a value to be returned at the end of {{name}}.',
			expectedInside: '{{arrayMethodName}}() expects a return value from {{name}}.',
			expectedReturnValue: '{{arrayMethodName}}() expects a return value from {{name}}.',
			expectedNoReturnValue: '{{arrayMethodName}}() expects no useless return value from {{name}}.'
		}
	}
}