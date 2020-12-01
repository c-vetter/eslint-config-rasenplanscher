export const requireJsdoc = {
	id: 'require-jsdoc',
	key: 'require-jsdoc',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require JSDoc comments',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/require-jsdoc'
		},
		schema: [
			{
				type: 'object',
				properties: {
					require: {
						type: 'object',
						properties: {
							ClassDeclaration: {
								type: 'boolean',
								default: false
							},
							MethodDefinition: {
								type: 'boolean',
								default: false
							},
							FunctionDeclaration: {
								type: 'boolean',
								default: true
							},
							ArrowFunctionExpression: {
								type: 'boolean',
								default: false
							},
							FunctionExpression: {
								type: 'boolean',
								default: false
							}
						},
						additionalProperties: false,
						default: {}
					}
				},
				additionalProperties: false
			}
		],
		deprecated: true,
		replacedBy: [],
		messages: {
			missingJSDocComment: 'Missing JSDoc comment.'
		}
	}
}