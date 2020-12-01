export const jsdocRequireReturns = {
	id: 'jsdoc/require-returns',
	key: 'require-returns',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires returns are documented.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-returns'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					checkConstructors: {
						default: false,
						type: 'boolean'
					},
					checkGetters: {
						default: true,
						type: 'boolean'
					},
					contexts: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					exemptedBy: {
						items: {
							type: 'string'
						},
						type: 'array'
					},
					forceRequireReturn: {
						default: false,
						type: 'boolean'
					},
					forceReturnsWithAsync: {
						default: false,
						type: 'boolean'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}