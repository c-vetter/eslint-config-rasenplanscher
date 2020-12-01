export const importNoUnassignedImport = {
	id: 'import/no-unassigned-import',
	key: 'no-unassigned-import',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-unassigned-import.md'
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
					allow: {
						type: 'array',
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