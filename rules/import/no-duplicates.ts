export const importNoDuplicates = {
	id: 'import/no-duplicates',
	key: 'no-duplicates',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-duplicates.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					considerQueryString: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}