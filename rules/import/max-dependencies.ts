export const importMaxDependencies = {
	id: 'import/max-dependencies',
	key: 'max-dependencies',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/max-dependencies.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					max: {
						type: 'number'
					}
				},
				additionalProperties: false
			}
		]
	}
}