export const noMultipleEmptyLines = {
	id: 'no-multiple-empty-lines',
	key: 'no-multiple-empty-lines',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow multiple empty lines',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-multiple-empty-lines'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					max: {
						type: 'integer',
						minimum: 0
					},
					maxEOF: {
						type: 'integer',
						minimum: 0
					},
					maxBOF: {
						type: 'integer',
						minimum: 0
					}
				},
				required: [
					'max'
				],
				additionalProperties: false
			}
		],
		messages: {
			blankBeginningOfFile: 'Too many blank lines at the beginning of file. Max of {{max}} allowed.',
			blankEndOfFile: 'Too many blank lines at the end of file. Max of {{max}} allowed.',
			consecutiveBlank: 'More than {{max}} blank {{pluralizedLines}} not allowed.'
		}
	}
}