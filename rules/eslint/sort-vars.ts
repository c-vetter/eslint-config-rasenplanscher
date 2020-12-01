export const sortVars = {
	id: 'sort-vars',
	key: 'sort-vars',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require variables within the same declaration block to be sorted',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/sort-vars'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreCase: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			sortVars: 'Variables within the same declaration block should be sorted alphabetically.'
		}
	}
}