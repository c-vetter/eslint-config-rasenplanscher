export const typescriptEslintPreferIncludes = {
	id: '@typescript-eslint/prefer-includes',
	key: 'prefer-includes',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce `includes` method over `indexOf` method',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-includes.md'
		},
		fixable: 'code',
		messages: {
			preferIncludes: 'Use ‘includes()’ method instead.',
			preferStringIncludes: 'Use `String#includes()` method with a string instead.'
		},
		schema: []
	}
}