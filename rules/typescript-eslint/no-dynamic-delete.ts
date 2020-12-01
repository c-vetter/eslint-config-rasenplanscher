export const typescriptEslintNoDynamicDelete = {
	id: '@typescript-eslint/no-dynamic-delete',
	key: 'no-dynamic-delete',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Best Practices',
			description: 'Disallow the delete operator with computed key expressions',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-dynamic-delete.md'
		},
		fixable: 'code',
		messages: {
			dynamicDelete: 'Do not delete dynamically computed property keys.'
		},
		schema: [],
		type: 'suggestion'
	}
}