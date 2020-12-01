export const typescriptEslintPreferRegexpExec = {
	id: '@typescript-eslint/prefer-regexp-exec',
	key: 'prefer-regexp-exec',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md'
		},
		messages: {
			regExpExecOverStringMatch: 'Use the `RegExp#exec()` method instead.'
		},
		schema: []
	}
}