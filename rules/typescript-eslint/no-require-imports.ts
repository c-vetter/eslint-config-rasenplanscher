export const typescriptEslintNoRequireImports = {
	id: '@typescript-eslint/no-require-imports',
	key: 'no-require-imports',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows invocation of `require()`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-require-imports.md'
		},
		schema: [],
		messages: {
			noRequireImports: 'A `require()` style import is forbidden.'
		}
	}
}