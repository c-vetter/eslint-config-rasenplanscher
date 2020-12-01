export const typescriptEslintNoNamespace = {
	id: '@typescript-eslint/no-namespace',
	key: 'no-namespace',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow the use of custom TypeScript modules and namespaces',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-namespace.md'
		},
		messages: {
			moduleSyntaxIsPreferred: 'ES2015 module syntax is preferred over custom TypeScript modules and namespaces.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowDeclarations: {
						type: 'boolean'
					},
					allowDefinitionFiles: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}