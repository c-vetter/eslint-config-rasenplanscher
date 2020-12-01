export const typescriptEslintArrayType = {
	id: '@typescript-eslint/array-type',
	key: 'array-type',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Requires using either `T[]` or `Array<T>` for arrays',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/array-type.md'
		},
		fixable: 'code',
		messages: {
			errorStringGeneric: 'Array type using ‘{{type}}[]’ is forbidden. Use ‘Array<{{type}}>’ instead.',
			errorStringGenericSimple: 'Array type using ‘{{type}}[]’ is forbidden for non-simple types. Use ‘Array<{{type}}>’ instead.',
			errorStringArray: 'Array type using ‘Array<{{type}}>’ is forbidden. Use ‘{{type}}[]’ instead.',
			errorStringArraySimple: 'Array type using ‘Array<{{type}}>’ is forbidden for simple types. Use ‘{{type}}[]’ instead.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					default: {
						enum: [
							'array',
							'generic',
							'array-simple'
						]
					},
					readonly: {
						enum: [
							'array',
							'generic',
							'array-simple'
						]
					}
				}
			}
		]
	}
}