export const typescriptCustomSortKeysInterface = {
	id: 'typescript-custom-sort-keys/interface',
	key: 'interface',
	namespace: 'typescript-custom-sort-keys',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require interface keys to be sorted',
			category: 'Stylistic Issues',
			recommended: 'warn',
			url: 'https://github.com/prash471/eslint-plugin-typescript-custom-sort-keys/blob/master/docs/rules/interface.md'
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
					},
					requiredFirst: {
						type: 'boolean'
					},
					displayFirst: {
						type: 'array'
					},
					showFunctionsAtEnd: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}