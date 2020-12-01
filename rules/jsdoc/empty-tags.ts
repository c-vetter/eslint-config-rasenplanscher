export const jsdocEmptyTags = {
	id: 'jsdoc/empty-tags',
	key: 'empty-tags',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Expects specific tags to be empty of any content.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-empty-tags'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					tags: {
						items: {
							type: 'string'
						},
						type: 'array'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}