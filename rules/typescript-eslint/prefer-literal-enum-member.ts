export const typescriptEslintPreferLiteralEnumMember = {
	id: '@typescript-eslint/prefer-literal-enum-member',
	key: 'prefer-literal-enum-member',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Require that all enum members be literal values to prevent unintended enum member name shadow issues',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md'
		},
		messages: {
			notLiteral: 'Explicit enum value must only be a literal value (string, number, boolean, etc).'
		},
		schema: []
	}
}