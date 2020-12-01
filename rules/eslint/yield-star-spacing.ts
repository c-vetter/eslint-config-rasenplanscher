export const yieldStarSpacing = {
	id: 'yield-star-spacing',
	key: 'yield-star-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow spacing around the `*` in `yield*` expressions',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/yield-star-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'before',
							'after',
							'both',
							'neither'
						]
					},
					{
						type: 'object',
						properties: {
							before: {
								type: 'boolean'
							},
							after: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			missingBefore: 'Missing space before *.',
			missingAfter: 'Missing space after *.',
			unexpectedBefore: 'Unexpected space before *.',
			unexpectedAfter: 'Unexpected space after *.'
		}
	}
}