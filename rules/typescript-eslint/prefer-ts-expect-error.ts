export const typescriptEslintPreferTsExpectError = {
	id: '@typescript-eslint/prefer-ts-expect-error',
	key: 'prefer-ts-expect-error',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Recommends using `@ts-expect-error` over `@ts-ignore`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md'
		},
		fixable: 'code',
		messages: {
			preferExpectErrorComment: 'Use “@ts-expect-error” to ensure an error is actually being suppressed.'
		},
		schema: []
	}
}