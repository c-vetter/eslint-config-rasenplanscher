export const typescriptEslintConsistentTypeDefinitions = {
	id: '@typescript-eslint/consistent-type-definitions',
	key: 'consistent-type-definitions',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Consistent with type definition either `interface` or `type`',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/consistent-type-definitions.md'
		},
		messages: {
			interfaceOverType: 'Use an `interface` instead of a `type`.',
			typeOverInterface: 'Use a `type` instead of an `interface`.'
		},
		schema: [
			{
				enum: [
					'interface',
					'type'
				]
			}
		],
		fixable: 'code'
	}
}