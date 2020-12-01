export const jsdocRequireParamDescription = {
	id: 'jsdoc/require-param-description',
	key: 'require-param-description',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that each `@param` tag has a `description` value.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-description'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					contexts: {
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