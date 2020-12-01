export const typescriptEslintPreferOptionalChain = {
	id: '@typescript-eslint/prefer-optional-chain',
	key: 'prefer-optional-chain',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer using concise optional chain expressions instead of chained logical ands',
			category: 'Best Practices',
			recommended: false,
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-optional-chain.md'
		},
		messages: {
			preferOptionalChain: 'Prefer using an optional chain expression instead, as it's more concise and easier to read.',
			optionalChainSuggest: 'Change to an optional chain.'
		},
		schema: []
	}
}