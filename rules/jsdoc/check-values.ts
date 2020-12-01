export const jsdocCheckValues = {
	id: 'jsdoc/check-values',
	key: 'check-values',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-values'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					allowedAuthors: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					allowedLicenses: {
						anyOf: [
							{
								items: {
									type: 'string'
								},
								type: 'array'
							},
							{
								type: 'boolean'
							}
						]
					},
					licensePattern: {
						type: 'string'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}