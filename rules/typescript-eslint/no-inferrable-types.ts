export const typescriptEslintNoInferrableTypes = {
	id: '@typescript-eslint/no-inferrable-types',
	key: 'no-inferrable-types',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-inferrable-types.md'
		},
		fixable: 'code',
		messages: {
			noInferrableType: 'Type {{type}} trivially inferred from a {{type}} literal, remove type annotation.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreParameters: {
						type: 'boolean'
					},
					ignoreProperties: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}