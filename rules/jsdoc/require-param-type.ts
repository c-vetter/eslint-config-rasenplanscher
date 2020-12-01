export const jsdocRequireParamType = {
	id: 'jsdoc/require-param-type',
	key: 'require-param-type',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that each `@param` tag has a `type` value.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-param-type'
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