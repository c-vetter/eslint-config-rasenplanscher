export const importNoExtraneousDependencies = {
	id: 'import/no-extraneous-dependencies',
	key: 'no-extraneous-dependencies',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-extraneous-dependencies.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					devDependencies: {
						type: [
							'boolean',
							'array'
						]
					},
					optionalDependencies: {
						type: [
							'boolean',
							'array'
						]
					},
					peerDependencies: {
						type: [
							'boolean',
							'array'
						]
					},
					bundledDependencies: {
						type: [
							'boolean',
							'array'
						]
					},
					packageDir: {
						type: [
							'string',
							'array'
						]
					}
				},
				additionalProperties: false
			}
		]
	}
}