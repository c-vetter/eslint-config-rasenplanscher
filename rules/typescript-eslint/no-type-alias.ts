export const typescriptEslintNoTypeAlias = {
	id: '@typescript-eslint/no-type-alias',
	key: 'no-type-alias',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow the use of type aliases',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-type-alias.md'
		},
		messages: {
			noTypeAlias: 'Type {{alias}} are not allowed.',
			noCompositionAlias: '{{typeName}} in {{compositionType}} types are not allowed.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowAliases: {
						enum: [
							'always',
							'never',
							'in-unions',
							'in-intersections',
							'in-unions-and-intersections'
						]
					},
					allowCallbacks: {
						enum: [
							'always',
							'never'
						]
					},
					allowConditionalTypes: {
						enum: [
							'always',
							'never'
						]
					},
					allowConstructors: {
						enum: [
							'always',
							'never'
						]
					},
					allowLiterals: {
						enum: [
							'always',
							'never',
							'in-unions',
							'in-intersections',
							'in-unions-and-intersections'
						]
					},
					allowMappedTypes: {
						enum: [
							'always',
							'never',
							'in-unions',
							'in-intersections',
							'in-unions-and-intersections'
						]
					},
					allowTupleTypes: {
						enum: [
							'always',
							'never',
							'in-unions',
							'in-intersections',
							'in-unions-and-intersections'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}