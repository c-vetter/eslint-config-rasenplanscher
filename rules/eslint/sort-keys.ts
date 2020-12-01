export const sortKeys = {
	id: 'sort-keys',
	key: 'sort-keys',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require object keys to be sorted',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/sort-keys'
		},
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
						type: 'boolean',
						default: true
					},
					natural: {
						type: 'boolean',
						default: false
					},
					minKeys: {
						type: 'integer',
						minimum: 2,
						default: 2
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			sortKeys: 'Expected object keys to be in {{natural}}{{insensitive}}{{order}}ending order. ‘{{thisName}}’ should be before ‘{{prevName}}’.'
		}
	}
}