export const typescriptEslintQuotes = {
	id: '@typescript-eslint/quotes',
	key: 'quotes',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforce the consistent use of either backticks, double, or single quotes',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/quotes.md'
		},
		fixable: 'code',
		messages: {
			wrongQuotes: 'Strings must use {{description}}.'
		},
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
		]
	}
}