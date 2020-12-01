export const jsdocCheckTagNames = {
	id: 'jsdoc/check-tag-names',
	key: 'check-tag-names',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports invalid block tag names.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-tag-names'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					definedTags: {
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