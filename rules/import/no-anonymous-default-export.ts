export const importNoAnonymousDefaultExport = {
	id: 'import/no-anonymous-default-export',
	key: 'no-anonymous-default-export',
	namespace: 'import',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			url: 'https://github.com/benmosher/eslint-plugin-import/blob/v2.22.1/docs/rules/no-anonymous-default-export.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowArray: {
						description: 'If `false`, will report default export of an array',
						type: 'boolean'
					},
					allowArrowFunction: {
						description: 'If `false`, will report default export of an arrow function',
						type: 'boolean'
					},
					allowCallExpression: {
						description: 'If `false`, will report default export of a function call',
						type: 'boolean'
					},
					allowAnonymousClass: {
						description: 'If `false`, will report default export of an anonymous class',
						type: 'boolean'
					},
					allowAnonymousFunction: {
						description: 'If `false`, will report default export of an anonymous function',
						type: 'boolean'
					},
					allowLiteral: {
						description: 'If `false`, will report default export of a literal',
						type: 'boolean'
					},
					allowObject: {
						description: 'If `false`, will report default export of an object expression',
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}