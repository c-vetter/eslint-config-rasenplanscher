export const typescriptEslintRequireAwait = {
	id: '@typescript-eslint/require-await',
	key: 'require-await',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow async functions which have no `await` expression',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/require-await.md'
		},
		schema: [],
		messages: {
			missingAwait: '{{name}} has no ‘await’ expression.'
		}
	}
}