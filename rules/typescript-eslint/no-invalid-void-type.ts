export const typescriptEslintNoInvalidVoidType = {
	id: '@typescript-eslint/no-invalid-void-type',
	key: 'no-invalid-void-type',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallows usage of `void` type outside of generic or return types',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-invalid-void-type.md'
		},
		messages: {
			invalidVoidForGeneric: '{{ generic }} may not have void as a type variable',
			invalidVoidNotReturnOrGeneric: 'void is only valid as a return type or generic type variable',
			invalidVoidNotReturn: 'void is only valid as a return type',
			invalidVoidNotReturnOrThisParam: 'void is only valid as return type or type of `this` parameter',
			invalidVoidNotReturnOrThisParamOrGeneric: 'void is only valid as a return type or generic type variable or the type of a `this` parameter'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowInGenericTypeArguments: {
						oneOf: [
							{
								type: 'boolean'
							},
							{
								type: 'array',
								items: {
									type: 'string'
								},
								minLength: 1
							}
						]
					},
					allowAsThisParameter: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}