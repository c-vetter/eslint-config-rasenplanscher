export const importNoRestrictedPaths = {
	id: 'import/no-restricted-paths',
	key: 'no-restricted-paths',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-restricted-paths.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					zones: {
						type: 'array',
						minItems: 1,
						items: {
							type: 'object',
							properties: {
								target: {
									type: 'string'
								},
								from: {
									type: 'string'
								},
								except: {
									type: 'array',
									items: {
										type: 'string'
									},
									uniqueItems: true
								},
								message: {
									type: 'string'
								}
							},
							additionalProperties: false
						}
					},
					basePath: {
						type: 'string'
					}
				},
				additionalProperties: false
			}
		]
	}
}