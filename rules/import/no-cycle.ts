export const importNoCycle = {
	id: 'import/no-cycle',
	key: 'no-cycle',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-cycle.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					commonjs: {
						type: 'boolean'
					},
					amd: {
						type: 'boolean'
					},
					esmodule: {
						type: 'boolean'
					},
					ignore: {
						type: 'array',
						minItems: 1,
						items: {
							type: 'string'
						},
						uniqueItems: true
					},
					maxDepth: {
						oneOf: [
							{
								description: 'maximum dependency depth to traverse',
								type: 'integer',
								minimum: 1
							},
							{
								enum: [
									'∞'
								],
								type: 'string'
							}
						]
					},
					ignoreExternal: {
						description: 'ignore external modules',
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		]
	}
}