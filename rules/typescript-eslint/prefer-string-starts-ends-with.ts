export const typescriptEslintPreferStringStartsEndsWith = {
	id: '@typescript-eslint/prefer-string-starts-ends-with',
	key: 'prefer-string-starts-ends-with',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md'
		},
		messages: {
			preferStartsWith: 'Use ‘String#startsWith’ method instead.',
			preferEndsWith: 'Use the ‘String#endsWith’ method instead.'
		},
		schema: [],
		fixable: 'code'
	}
}