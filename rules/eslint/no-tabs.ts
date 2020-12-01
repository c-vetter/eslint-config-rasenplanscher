export const noTabs = {
	id: 'no-tabs',
	key: 'no-tabs',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow all tabs',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-tabs'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowIndentationTabs: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedTab: 'Unexpected tab character.'
		}
	}
}