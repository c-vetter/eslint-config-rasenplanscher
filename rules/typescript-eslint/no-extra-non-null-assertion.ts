export const typescriptEslintNoExtraNonNullAssertion = {
	id: '@typescript-eslint/no-extra-non-null-assertion',
	key: 'no-extra-non-null-assertion',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow extra non-null assertion',
			category: 'Stylistic Issues',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md'
		},
		fixable: 'code',
		schema: [],
		messages: {
			noExtraNonNullAssertion: 'Forbidden extra non-null assertion.'
		}
	}
}