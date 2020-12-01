export const jsdocRequireJsdoc = {
	id: 'jsdoc/require-jsdoc',
	key: 'require-jsdoc',
	namespace: 'jsdoc',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Stylistic Issues',
			description: 'Require JSDoc comments',
			recommended: 'true',
			url: 'https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc'
		},
		fixable: 'code',
		messages: {
			missingJsDoc: 'Missing JSDoc comment.'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					checkConstructors: {
						default: true,
						type: 'boolean'
					},
					checkGetters: {
						default: true,
						type: 'boolean'
					},
					checkSetters: {
						default: true,
						type: 'boolean'
					},
					contexts: {
						items: {
							anyOf: [
								{
									type: 'string'
								},
								{
									additionalProperties: false,
									properties: {
										context: {
											type: 'string'
										},
										inlineCommentBlock: {
											type: 'boolean'
										}
									},
									type: 'object'
								}
							]
						},
						type: 'array'
					},
					enableFixer: {
						default: true,
						type: 'boolean'
					},
					exemptEmptyConstructors: {
						default: false,
						type: 'boolean'
					},
					exemptEmptyFunctions: {
						default: false,
						type: 'boolean'
					},
					publicOnly: {
						oneOf: [
							{
								default: false,
								type: 'boolean'
							},
							{
								additionalProperties: false,
								default: {},
								properties: {
									ancestorsOnly: {
										type: 'boolean'
									},
									cjs: {
										type: 'boolean'
									},
									esm: {
										type: 'boolean'
									},
									window: {
										type: 'boolean'
									}
								},
								type: 'object'
							}
						]
					},
					require: {
						additionalProperties: false,
						default: {},
						properties: {
							ArrowFunctionExpression: {
								default: false,
								type: 'boolean'
							},
							ClassDeclaration: {
								default: false,
								type: 'boolean'
							},
							ClassExpression: {
								default: false,
								type: 'boolean'
							},
							FunctionDeclaration: {
								default: true,
								type: 'boolean'
							},
							FunctionExpression: {
								default: false,
								type: 'boolean'
							},
							MethodDefinition: {
								default: false,
								type: 'boolean'
							}
						},
						type: 'object'
					}
				},
				type: 'object'
			}
		],
		type: 'suggestion'
	}
}