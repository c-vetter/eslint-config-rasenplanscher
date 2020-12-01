export const jsdocRequireExample = {
	id: 'jsdoc/require-example',
	key: 'require-example',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that all functions have examples.',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-example'
		},
		fixable: 'code',
		schema: [
			{
				additionalProperties: false,
				properties: {
					checkConstructors: {
						default: true,
						type: 'boolean'
					},
					checkGetters: {
						default: false,
						type: 'boolean'
					},
					checkSetters: {
						default: false,
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
					exemptNoArguments: {
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