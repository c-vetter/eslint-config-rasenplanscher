export const jsdocNoBadBlocks = {
	id: 'jsdoc/no-bad-blocks',
	key: 'no-bad-blocks',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-bad-blocks'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					ignore: {
						items: {
							type: 'string'
						},
						type: 'array'
					}
				},
				type: 'object'
			}
		],
		type: 'layout'
	}
}