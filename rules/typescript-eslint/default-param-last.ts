export const typescriptEslintDefaultParamLast = {
	id: '@typescript-eslint/default-param-last',
	key: 'default-param-last',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce default parameters to be last',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/default-param-last.md'
		},
		schema: [],
		messages: {
			shouldBeLast: 'Default parameters should be last.'
		}
	}
}