export const lineCommentPosition = {
	id: 'line-comment-position',
	key: 'line-comment-position',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce position of line comments',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/line-comment-position'
		},
		schema: [
			{
				oneOf: [
					{
						enum: [
							'above',
							'beside'
						]
					},
					{
						type: 'object',
						properties: {
							position: {
								enum: [
									'above',
									'beside'
								]
							},
							ignorePattern: {
								type: 'string'
							},
							applyDefaultPatterns: {
								type: 'boolean'
							},
							applyDefaultIgnorePatterns: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			above: 'Expected comment to be above code.',
			beside: 'Expected comment to be beside code.'
		}
	}
}