export const jsdocMatchDescription = {
	id: 'jsdoc/match-description',
	key: 'match-description',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforces a regular expression pattern on descriptions.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-match-description'
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
					},
					mainDescription: {
						oneOf: [
							{
								format: 'regex',
								type: 'string'
							},
							{
								type: 'boolean'
							}
						]
					},
					matchDescription: {
						format: 'regex',
						type: 'string'
					},
					tags: {
						patternProperties: {
							'.*': {
								oneOf: [
									{
										format: 'regex',
										type: 'string'
									},
									{
										enum: [
											true
										],
										type: 'boolean'
									}
								]
							}
						},
						type: 'object'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}