export const typescriptEslintPreferForOf = {
	id: '@typescript-eslint/prefer-for-of',
	key: 'prefer-for-of',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-for-of.md'
		},
		messages: {
			preferForOf: 'Expected a `for-of` loop instead of a `for` loop with this simple iteration.'
		},
		schema: []
	}
}