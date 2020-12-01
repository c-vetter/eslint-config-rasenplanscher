export const jsdocNoUndefinedTypes = {
	id: 'jsdoc/no-undefined-types',
	key: 'no-undefined-types',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Checks that types in jsdoc comments are defined.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					definedTypes: {
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