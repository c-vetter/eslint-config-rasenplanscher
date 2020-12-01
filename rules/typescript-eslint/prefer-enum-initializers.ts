export const typescriptEslintPreferEnumInitializers = {
	id: '@typescript-eslint/prefer-enum-initializers',
	key: 'prefer-enum-initializers',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prefer initializing each enums member value',
			category: 'Best Practices',
			recommended: false,
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md'
		},
		messages: {
			defineInitializer: 'The value of the member ‘{{ name }}’ should be explicitly defined',
			defineInitializerSuggestion: 'Can be fixed to {{ name }} = {{ suggested }}'
		},
		schema: []
	}
}