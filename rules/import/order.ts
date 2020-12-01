export const importOrder = {
	id: 'import/order',
	key: 'order',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/order.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					groups: {
						type: 'array'
					},
					pathGroupsExcludedImportTypes: {
						type: 'array'
					},
					pathGroups: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								pattern: {
									type: 'string'
								},
								patternOptions: {
									type: 'object'
								},
								group: {
									type: 'string',
									enum: [
										'builtin',
										'external',
										'internal',
										'unknown',
										'parent',
										'sibling',
										'index',
										'object'
									]
								},
								position: {
									type: 'string',
									enum: [
										'after',
										'before'
									]
								}
							},
							required: [
								'pattern',
								'group'
							]
						}
					},
					'newlines-between': {
						enum: [
							'ignore',
							'always',
							'always-and-inside-groups',
							'never'
						]
					},
					alphabetize: {
						type: 'object',
						properties: {
							caseInsensitive: {
								type: 'boolean',
								default: false
							},
							order: {
								enum: [
									'ignore',
									'asc',
									'desc'
								],
								default: 'ignore'
							}
						},
						additionalProperties: false
					}
				},
				additionalProperties: false
			}
		]
	}
}