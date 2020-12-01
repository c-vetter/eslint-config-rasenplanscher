export const maxLines = {
	id: 'max-lines',
	key: 'max-lines',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum number of lines per file',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-lines'
		},
		schema: [
			{
				oneOf: [
					{
						type: 'integer',
						minimum: 0
					},
					{
						type: 'object',
						properties: {
							max: {
								type: 'integer',
								minimum: 0
							},
							skipComments: {
								type: 'boolean'
							},
							skipBlankLines: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			exceed: 'File has too many lines ({{actual}}). Maximum allowed is {{max}}.'
		}
	}
}