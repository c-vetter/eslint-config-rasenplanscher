export const importNewlineAfterImport = {
	id: 'import/newline-after-import',
	key: 'newline-after-import',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/newline-after-import.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					count: {
						type: 'integer',
						minimum: 1
					}
				},
				additionalProperties: false
			}
		]
	}
}