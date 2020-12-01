export const preferDestructuring = {
	id: 'prefer-destructuring',
	key: 'prefer-destructuring',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require destructuring from arrays and/or objects',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-destructuring'
		},
		fixable: 'code',
		schema: [
			{
				oneOf: [
					{
						type: 'object',
						properties: {
							VariableDeclarator: {
								type: 'object',
								properties: {
									array: {
										type: 'boolean'
									},
									object: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							},
							AssignmentExpression: {
								type: 'object',
								properties: {
									array: {
										type: 'boolean'
									},
									object: {
										type: 'boolean'
									}
								},
								additionalProperties: false
							}
						},
						additionalProperties: false
					},
					{
						type: 'object',
						properties: {
							array: {
								type: 'boolean'
							},
							object: {
								type: 'boolean'
							}
						},
						additionalProperties: false
					}
				]
			},
			{
				type: 'object',
				properties: {
					enforceForRenamedProperties: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			preferDestructuring: 'Use {{type}} destructuring.'
		}
	}
}