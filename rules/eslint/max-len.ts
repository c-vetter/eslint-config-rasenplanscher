export const maxLen = {
	id: 'max-len',
	key: 'max-len',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce a maximum line length',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-len'
		},
		schema: [
			{
				anyOf: [
					{
						type: 'object',
						properties: {
							code: {
								type: 'integer',
								minimum: 0
							},
							comments: {
								type: 'integer',
								minimum: 0
							},
							tabWidth: {
								type: 'integer',
								minimum: 0
							},
							ignorePattern: {
								type: 'string'
							},
							ignoreComments: {
								type: 'boolean'
							},
							ignoreStrings: {
								type: 'boolean'
							},
							ignoreUrls: {
								type: 'boolean'
							},
							ignoreTemplateLiterals: {
								type: 'boolean'
							},
							ignoreRegExpLiterals: {
								type: 'boolean'
							},
							ignoreTrailingComments: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'integer',
						minimum: 0
					}
				]
			},
			{
				anyOf: [
					{
						type: 'object',
						properties: {
							code: {
								type: 'integer',
								minimum: 0
							},
							comments: {
								type: 'integer',
								minimum: 0
							},
							tabWidth: {
								type: 'integer',
								minimum: 0
							},
							ignorePattern: {
								type: 'string'
							},
							ignoreComments: {
								type: 'boolean'
							},
							ignoreStrings: {
								type: 'boolean'
							},
							ignoreUrls: {
								type: 'boolean'
							},
							ignoreTemplateLiterals: {
								type: 'boolean'
							},
							ignoreRegExpLiterals: {
								type: 'boolean'
							},
							ignoreTrailingComments: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					},
					{
						type: 'integer',
						minimum: 0
					}
				]
			},
			{
				type: 'object',
				properties: {
					code: {
						type: 'integer',
						minimum: 0
					},
					comments: {
						type: 'integer',
						minimum: 0
					},
					tabWidth: {
						type: 'integer',
						minimum: 0
					},
					ignorePattern: {
						type: 'string'
					},
					ignoreComments: {
						type: 'boolean'
					},
					ignoreStrings: {
						type: 'boolean'
					},
					ignoreUrls: {
						type: 'boolean'
					},
					ignoreTemplateLiterals: {
						type: 'boolean'
					},
					ignoreRegExpLiterals: {
						type: 'boolean'
					},
					ignoreTrailingComments: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			max: 'This line has a length of {{lineLength}}. Maximum allowed is {{maxLength}}.',
			maxComment: 'This line has a comment length of {{lineLength}}. Maximum allowed is {{maxCommentLength}}.'
		}
	}
}