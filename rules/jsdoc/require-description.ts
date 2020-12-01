export const jsdocRequireDescription = {
	id: 'jsdoc/require-description',
	key: 'require-description',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that all functions have a description.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					checkConstructors: {
						default: true,
						type: 'boolean'
					},
					checkGetters: {
						default: true,
						type: 'boolean'
					},
					checkSetters: {
						default: true,
						type: 'boolean'
					},
					contexts: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					descriptionStyle: {
						enum: [
							'body',
							'tag',
							'any'
						],
						type: 'string'
					},
					exemptedBy: {
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