export const typescriptEslintPreferReadonly = {
	id: '@typescript-eslint/prefer-readonly',
	key: 'prefer-readonly',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that private members are marked as `readonly` if they're never modified outside of the constructor',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-readonly.md'
		},
		fixable: 'code',
		messages: {
			preferReadonly: 'Member ‘{{name}}’ is never reassigned; mark it as `readonly`.'
		},
		schema: [
			{
				allowAdditionalProperties: false,
				properties: {
					onlyInlineLambdas: {
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}