export const jsdocRequireHyphenBeforeParamDescription = {
	id: 'jsdoc/require-hyphen-before-param-description',
	key: 'require-hyphen-before-param-description',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires a hyphen before the `@param` description.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-hyphen-before-param-description'
		},
		fixable: 'code',
		schema: [
			{
				enum: [
					'always',
					'never'
				],
				type: 'string'
			},
			{
				additionalProperties: false,
				properties: {
					tags: {
						anyOf: [
							{
								patternProperties: {
									'.*': {
										enum: [
											'always',
											'never'
										],
										type: 'string'
									}
								},
								type: 'object'
							},
							{
								enum: [
									'any'
								],
								type: 'string'
							}
						]
					}
				},
				type: 'object'
			}
		],
		type: 'layout'
	}
}