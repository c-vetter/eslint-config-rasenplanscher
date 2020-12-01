export const jsdocNoTypes = {
	id: 'jsdoc/no-types',
	key: 'no-types',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'This rule reports types being used on `@param` or `@returns`.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-types'
		},
		fixable: 'code',
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