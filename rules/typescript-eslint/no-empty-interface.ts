export const typescriptEslintNoEmptyInterface = {
	id: '@typescript-eslint/no-empty-interface',
	key: 'no-empty-interface',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow the declaration of empty interfaces',
			category: 'Best Practices',
			recommended: 'error',
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-empty-interface.md'
		},
		fixable: 'code',
		messages: {
			noEmpty: 'An empty interface is equivalent to `{}`.',
			noEmptyWithSuper: 'An interface declaring no members is equivalent to its supertype.'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					allowSingleExtends: {
						type: 'boolean'
					}
				}
			}
		]
	}
}