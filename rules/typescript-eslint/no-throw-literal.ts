export const typescriptEslintNoThrowLiteral = {
	id: '@typescript-eslint/no-throw-literal',
	key: 'no-throw-literal',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow throwing literals as exceptions',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-throw-literal.md'
		},
		schema: [],
		messages: {
			object: 'Expected an error object to be thrown.',
			undef: 'Do not throw undefined.'
		}
	}
}