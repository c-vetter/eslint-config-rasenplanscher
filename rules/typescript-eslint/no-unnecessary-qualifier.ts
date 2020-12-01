export const typescriptEslintNoUnnecessaryQualifier = {
	id: '@typescript-eslint/no-unnecessary-qualifier',
	key: 'no-unnecessary-qualifier',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Best Practices',
			description: 'Warns when a namespace qualifier is unnecessary',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md'
		},
		fixable: 'code',
		messages: {
			unnecessaryQualifier: 'Qualifier is unnecessary since ‘{{ name }}’ is in scope.'
		},
		schema: [],
		type: 'suggestion'
	}
}