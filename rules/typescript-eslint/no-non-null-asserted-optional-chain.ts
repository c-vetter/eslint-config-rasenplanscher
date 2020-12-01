export const typescriptEslintNoNonNullAssertedOptionalChain = {
	id: '@typescript-eslint/no-non-null-asserted-optional-chain',
	key: 'no-non-null-asserted-optional-chain',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows using a non-null assertion after an optional chain expression',
			category: 'Possible Errors',
			recommended: 'error',
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md'
		},
		messages: {
			noNonNullOptionalChain: 'Optional chain expressions can return undefined by design - using a non-null assertion is unsafe and wrong.',
			suggestRemovingNonNull: 'You should remove the non-null assertion.'
		},
		schema: []
	}
}