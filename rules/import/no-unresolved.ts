export const importNoUnresolved = {
	id: 'import/no-unresolved',
	key: 'no-unresolved',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-unresolved.md'
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
					caseSensitive: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		]
	}
}