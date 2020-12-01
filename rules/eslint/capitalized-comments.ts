export const capitalizedComments = {
	id: 'capitalized-comments',
	key: 'capitalized-comments',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce or disallow capitalization of the first letter of a comment',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/capitalized-comments'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			},
			{
				oneOf: [
					{
						type: 'object',
						properties: {
							ignorePattern: {
								type: 'string'
							},
							ignoreInlineComments: {
								type: 'boolean'
							},
							ignoreConsecutiveComments: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							line: {
								type: 'object',
								properties: {
									ignorePattern: {
										type: 'string'
									},
									ignoreInlineComments: {
										type: 'boolean'
									},
									ignoreConsecutiveComments: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							block: {
								type: 'object',
								properties: {
									ignorePattern: {
										type: 'string'
									},
									ignoreInlineComments: {
										type: 'boolean'
									},
									ignoreConsecutiveComments: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			unexpectedLowercaseComment: 'Comments should not begin with a lowercase character.',
			unexpectedUppercaseComment: 'Comments should not begin with an uppercase character.'
		}
	}
}