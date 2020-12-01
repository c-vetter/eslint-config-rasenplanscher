export const importNoAbsolutePath = {
	id: 'import/no-absolute-path',
	key: 'no-absolute-path',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-absolute-path.md'
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
					}
				},
				additionalProperties: false
			}
		]
	}
}