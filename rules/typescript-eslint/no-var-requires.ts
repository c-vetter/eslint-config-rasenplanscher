export const typescriptEslintNoVarRequires = {
	id: '@typescript-eslint/no-var-requires',
	key: 'no-var-requires',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows the use of require statements except in import statements',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-var-requires.md'
		},
		messages: {
			noVarReqs: 'Require statement not part of import statement.'
		},
		schema: []
	}
}