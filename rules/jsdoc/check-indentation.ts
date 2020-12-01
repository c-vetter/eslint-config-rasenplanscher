export const jsdocCheckIndentation = {
	id: 'jsdoc/check-indentation',
	key: 'check-indentation',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports invalid padding inside JSDoc blocks.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-indentation'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					excludeTags: {
						items: {
							pattern: '^\\S+$',
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