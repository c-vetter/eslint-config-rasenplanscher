export const noInlineComments = {
	id: 'no-inline-comments',
	key: 'no-inline-comments',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow inline comments after code',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-inline-comments'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignorePattern: {
						type: 'string'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedInlineComment: 'Unexpected comment inline with code.'
		}
	}
}