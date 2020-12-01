export const typescriptEslintPreferReduceTypeParameter = {
	id: '@typescript-eslint/prefer-reduce-type-parameter',
	key: 'prefer-reduce-type-parameter',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			category: 'Best Practices',
			recommended: false,
			description: 'Prefer using type parameter when calling `Array#reduce` instead of casting',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md'
		},
		messages: {
			preferTypeParameter: 'Unnecessary cast: Array#reduce accepts a type parameter for the default value.'
		},
		fixable: 'code',
		schema: []
	}
}