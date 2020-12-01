export const typescriptEslintNoArrayConstructor = {
	id: '@typescript-eslint/no-array-constructor',
	key: 'no-array-constructor',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow generic `Array` constructors',
			category: 'Stylistic Issues',
			recommended: 'error',
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-array-constructor.md'
		},
		fixable: 'code',
		messages: {
			useLiteral: 'The array literal notation [] is preferable.'
		},
		schema: []
	}
}