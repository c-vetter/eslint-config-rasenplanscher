export const typescriptEslintNoExtraSemi = {
	id: '@typescript-eslint/no-extra-semi',
	key: 'no-extra-semi',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow unnecessary semicolons',
			category: 'Possible Errors',
			recommended: 'error',
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-extra-semi.md'
		},
		fixable: 'code',
		schema: [],
		messages: {
			unexpected: 'Unnecessary semicolon.'
		}
	}
}