export const typescriptEslintNoUnnecessaryTypeConstraint = {
	id: '@typescript-eslint/no-unnecessary-type-constraint',
	key: 'no-unnecessary-type-constraint',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Best Practices',
			description: 'Disallows unnecessary constraints on generic types',
			recommended: false,
			suggestion: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md'
		},
		fixable: 'code',
		messages: {
			unnecessaryConstraint: 'Constraining the generic type `{{name}}` to `{{constraint}}` does nothing and is unnecessary.'
		},
		schema: [],
		type: 'suggestion'
	}
}