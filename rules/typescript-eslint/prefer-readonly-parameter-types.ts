export const typescriptEslintPreferReadonlyParameterTypes = {
	id: '@typescript-eslint/prefer-readonly-parameter-types',
	key: 'prefer-readonly-parameter-types',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Requires that function parameters are typed as readonly to prevent accidental mutation of inputs',
			category: 'Possible Errors',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					checkParameterProperties: {
						type: 'boolean'
					},
					ignoreInferredTypes: {
						type: 'boolean'
					}
				}
			}
		],
		messages: {
			shouldBeReadonly: 'Parameter should be a read only type.'
		}
	}
}