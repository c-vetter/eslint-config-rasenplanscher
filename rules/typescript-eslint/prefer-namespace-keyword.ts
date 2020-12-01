export const typescriptEslintPreferNamespaceKeyword = {
	id: '@typescript-eslint/prefer-namespace-keyword',
	key: 'prefer-namespace-keyword',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md'
		},
		fixable: 'code',
		messages: {
			useNamespace: 'Use ‘namespace’ instead of ‘module’ to declare custom TypeScript modules.'
		},
		schema: []
	}
}