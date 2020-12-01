export const typescriptEslintNoUnusedVarsExperimental = {
	id: '@typescript-eslint/no-unused-vars-experimental',
	key: 'no-unused-vars-experimental',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow unused variables and arguments',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md'
		},
		deprecated: true,
		replacedBy: [
			'no-unused-vars'
		],
		schema: [
			{
				type: 'object',
				properties: {
					ignoredNamesRegex: {
						oneOf: [
							{
								type: 'string'
							},
							{
								type: 'boolean',
								enum: [
									false
								]
							}
						]
					},
					ignoreArgsIfArgsAfterAreUsed: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unused: '{{type}} ‘{{name}}’ is declared but its value is never read.',
			unusedWithIgnorePattern: '{{type}} ‘{{name}}’ is declared but its value is never read. Allowed unused names must match {{pattern}}.',
			unusedImport: 'All imports in import declaration are unused.',
			unusedTypeParameters: 'All type parameters are unused.'
		}
	}
}