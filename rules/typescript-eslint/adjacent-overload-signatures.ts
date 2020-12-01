export const typescriptEslintAdjacentOverloadSignatures = {
	id: '@typescript-eslint/adjacent-overload-signatures',
	key: 'adjacent-overload-signatures',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Require that member overloads be consecutive',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md'
		},
		schema: [],
		messages: {
			adjacentSignature: 'All ‘{{name}}’ signatures should be adjacent.'
		}
	}
}