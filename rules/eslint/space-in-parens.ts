export const spaceInParens = {
	id: 'space-in-parens',
	key: 'space-in-parens',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing inside parentheses',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/space-in-parens'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			},
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'array',
						items: {
							enum: [
								'{}',
								'[]',
								'()',
								'empty'
							]
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingOpeningSpace: 'There must be a space after this paren.',
			missingClosingSpace: 'There must be a space before this paren.',
			rejectedOpeningSpace: 'There should be no space after this paren.',
			rejectedClosingSpace: 'There should be no space before this paren.'
		}
	}
}