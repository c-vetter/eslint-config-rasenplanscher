export const jsdocCheckTypes = {
	id: 'jsdoc/check-types',
	key: 'check-types',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Reports invalid types.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-check-types'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					exemptTagContexts: {
						items: {
							additionalProperties: false,
							properties: {
								tag: {
									type: 'string'
								},
								types: {
									oneOf: [
										{
											type: 'boolean'
										},
										{
											items: {
												type: 'string'
											},
											type: 'array'
										}
									]
								}
							},
							type: 'object'
						},
						type: 'array'
					},
					noDefaults: {
						type: 'boolean'
					},
					unifyParentAndChildTypeChecks: {
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}