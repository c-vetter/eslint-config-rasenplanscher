export const commaStyle = {
	id: 'comma-style',
	key: 'comma-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent comma style',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/comma-style'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'first',
					'last'
				]
			},
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'object',
						additionalProperties: {
							type: 'boolean'
						}
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedLineBeforeAndAfterComma: 'Bad line breaking before and after ‘,’.',
			expectedCommaFirst: '‘,’ should be placed first.',
			expectedCommaLast: '‘,’ should be placed last.'
		}
	}
}