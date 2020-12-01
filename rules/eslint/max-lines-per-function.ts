export const maxLinesPerFunction = {
	id: 'max-lines-per-function',
	key: 'max-lines-per-function',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum number of line of code in a function',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-lines-per-function'
		},
		schema: [
			{
				oneOf: [
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
							},
							IIFEs: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'integer',
						minimum: 1
					}
				]
			}
		],
		messages: {
			exceed: '{{name}} has too many lines ({{lineCount}}). Maximum allowed is {{maxLines}}.'
		}
	}
}