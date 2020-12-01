export const importNoNodejsModules = {
	id: 'import/no-nodejs-modules',
	key: 'no-nodejs-modules',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-nodejs-modules.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						type: 'array',
						uniqueItems: true,
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		]
	}
}