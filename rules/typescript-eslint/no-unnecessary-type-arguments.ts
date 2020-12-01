export const typescriptEslintNoUnnecessaryTypeArguments = {
	id: '@typescript-eslint/no-unnecessary-type-arguments',
	key: 'no-unnecessary-type-arguments',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforces that type arguments will not be used if not required',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md'
		},
		fixable: 'code',
		messages: {
			unnecessaryTypeParameter: 'This is the default value for this type parameter, so it can be omitted.'
		},
		schema: [],
		type: 'suggestion'
	}
}