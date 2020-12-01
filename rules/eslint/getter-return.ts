export const getterReturn = {
	id: 'getter-return',
	key: 'getter-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'enforce `return` statements in getters',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/getter-return'
		},
		fixable: null,
		schema: [
			{
				type: 'object',
				properties: {
					allowImplicit: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			expected: 'Expected to return a value in {{name}}.',
			expectedAlways: 'Expected {{name}} to always return a value.'
		}
	}
}