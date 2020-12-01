export const jsdocNoDefaults = {
	id: 'jsdoc/no-defaults',
	key: 'no-defaults',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'This rule reports defaults being used on the relevant portion of `@param` or `@default`.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-defaults'
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
					},
					noOptionalParamNames: {
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}