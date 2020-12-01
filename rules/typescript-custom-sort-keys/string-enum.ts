export const typescriptCustomSortKeysStringEnum = {
	id: 'typescript-custom-sort-keys/string-enum',
	key: 'string-enum',
	namespace: 'typescript-custom-sort-keys',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require string enum members to be sorted',
			category: 'Stylistic Issues',
			recommended: 'warn',
			url: 'https://github.com/prash471/eslint-plugin-typescript-custom-sort-keys/blob/master/docs/rules/string-enum.md'
		},
		messages: {
			invalidOrder: 'Please fix the order by running eslint --fix'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'asc',
					'desc'
				]
			},
			{
				type: 'object',
				properties: {
					caseSensitive: {
						type: 'boolean'
					},
					natural: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}