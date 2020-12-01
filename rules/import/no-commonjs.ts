export const importNoCommonjs = {
	id: 'import/no-commonjs',
	key: 'no-commonjs',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-commonjs.md'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'allow-primitive-modules'
							]
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							type: 'object',
							properties: {
								allowPrimitiveModules: {
									type: 'boolean'
								},
								allowRequire: {
									type: 'boolean'
								},
								allowConditionalRequire: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					],
					additionalItems: false
				}
			]
		}
	}
}