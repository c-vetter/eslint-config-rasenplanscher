export const importNoUselessPathSegments = {
	id: 'import/no-useless-path-segments',
	key: 'no-useless-path-segments',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-useless-path-segments.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					commonjs: {
						type: 'boolean'
					},
					noUselessIndex: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}