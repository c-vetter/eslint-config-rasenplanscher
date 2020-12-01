export const typescriptEslintNoUnnecessaryTypeAssertion = {
	id: '@typescript-eslint/no-unnecessary-type-assertion',
	key: 'no-unnecessary-type-assertion',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Warns if a type assertion does not change the type of an expression',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md'
		},
		fixable: 'code',
		messages: {
			unnecessaryAssertion: 'This assertion is unnecessary since it does not change the type of the expression.',
			contextuallyUnnecessary: 'This assertion is unnecessary since the receiver accepts the original type of the expression.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					typesToIgnore: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				}
			}
		],
		type: 'suggestion'
	}
}