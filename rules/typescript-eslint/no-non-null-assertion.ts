export const typescriptEslintNoNonNullAssertion = {
	id: '@typescript-eslint/no-non-null-assertion',
	key: 'no-non-null-assertion',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows non-null assertions using the `!` postfix operator',
			category: 'Stylistic Issues',
			recommended: 'warn',
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-non-null-assertion.md'
		},
		messages: {
			noNonNull: 'Forbidden non-null assertion.',
			suggestOptionalChain: 'Consider using the optional chain operator `?.` instead. This operator includes runtime checks, so it is safer than the compile-only non-null assertion operator.'
		},
		schema: []
	}
}