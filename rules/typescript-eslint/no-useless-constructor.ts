export const typescriptEslintNoUselessConstructor = {
	id: '@typescript-eslint/no-useless-constructor',
	key: 'no-useless-constructor',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow unnecessary constructors',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-useless-constructor.md'
		},
		schema: [],
		messages: {
			noUselessConstructor: 'Useless constructor.'
		}
	}
}