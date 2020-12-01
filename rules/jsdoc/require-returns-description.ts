export const jsdocRequireReturnsDescription = {
	id: 'jsdoc/require-returns-description',
	key: 'require-returns-description',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that the `@returns` tag has a `description` value.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns-description'
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