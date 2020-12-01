export const quotes = {
	id: 'quotes',
	key: 'quotes',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce the consistent use of either backticks, double, or single quotes',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/quotes'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'single',
					'double',
					'backtick'
				]
			},
			{
				anyOf: [
					{
						enum: [
							'avoid-escape'
						]
					},
					{
						type: 'object',
						properties: {
							avoidEscape: {
								type: 'boolean'
							},
							allowTemplateLiterals: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			wrongQuotes: 'Strings must use {{description}}.'
		}
	}
}