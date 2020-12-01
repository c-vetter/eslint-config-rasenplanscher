export const noWarningComments = {
	id: 'no-warning-comments',
	key: 'no-warning-comments',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow specified warning terms in comments',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-warning-comments'
		},
		schema: [
			{
				type: 'object',
				properties: {
					terms: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					location: {
						enum: [
							'start',
							'anywhere'
						]
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedComment: 'Unexpected ‘{{matchedTerm}}’ comment: ‘{{comment}}’.'
		}
	}
}