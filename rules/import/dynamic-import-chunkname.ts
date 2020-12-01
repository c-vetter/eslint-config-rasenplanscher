export const importDynamicImportChunkname = {
	id: 'import/dynamic-import-chunkname',
	key: 'dynamic-import-chunkname',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/dynamic-import-chunkname.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					importFunctions: {
						type: 'array',
						uniqueItems: true,
						items: {
							type: 'string'
						}
					},
					webpackChunknameFormat: {
						type: 'string'
					}
				}
			}
		]
	}
}