export const typescriptEslintPreferAsConst = {
	id: '@typescript-eslint/prefer-as-const',
	key: 'prefer-as-const',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer usage of `as const` over literal type',
			category: 'Best Practices',
			recommended: 'error',
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-as-const.md'
		},
		fixable: 'code',
		messages: {
			preferConstAssertion: 'Expected a `const` instead of a literal type assertion.',
			variableConstAssertion: 'Expected a `const` assertion instead of a literal type annotation.',
			variableSuggest: 'You should use `as const` instead of type annotation.'
		},
		schema: []
	}
}