export const indent = {
	id: 'indent',
	key: 'indent',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent indentation',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/indent'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'tab'
						]
					},
					{
						type: 'integer',
						minimum: 0
					}
				]
			},
			{
				type: 'object',
				properties: {
					SwitchCase: {
						type: 'integer',
						minimum: 0,
						default: 0
					},
					VariableDeclarator: {
						oneOf: [
							{
								oneOf: [
									{
										type: 'integer',
										minimum: 0
									},
									{
										enum: [
											'first',
											'off'
										]
									}
								]
							},
							{
								type: 'object',
								properties: {
									var: {
										oneOf: [
											{
												type: 'integer',
												minimum: 0
											},
											{
												enum: [
													'first',
													'off'
												]
											}
										]
									},
									let: {
										oneOf: [
											{
												type: 'integer',
												minimum: 0
											},
											{
												enum: [
													'first',
													'off'
												]
											}
										]
									},
									const: {
										oneOf: [
											{
												type: 'integer',
												minimum: 0
											},
											{
												enum: [
													'first',
													'off'
												]
											}
										]
									}
								},
								additionalProperties: false
							}
						]
					},
					outerIIFEBody: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								enum: [
									'off'
								]
							}
						]
					},
					MemberExpression: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								enum: [
									'off'
								]
							}
						]
					},
					FunctionDeclaration: {
						type: 'object',
						properties: {
							parameters: {
								oneOf: [
									{
										type: 'integer',
										minimum: 0
									},
									{
										enum: [
											'first',
											'off'
										]
									}
								]
							},
							body: {
								type: 'integer',
								minimum: 0
							}
						},
						additionalProperties: false
					},
					FunctionExpression: {
						type: 'object',
						properties: {
							parameters: {
								oneOf: [
									{
										type: 'integer',
										minimum: 0
									},
									{
										enum: [
											'first',
											'off'
										]
									}
								]
							},
							body: {
								type: 'integer',
								minimum: 0
							}
						},
						additionalProperties: false
					},
					CallExpression: {
						type: 'object',
						properties: {
							arguments: {
								oneOf: [
									{
										type: 'integer',
										minimum: 0
									},
									{
										enum: [
											'first',
											'off'
										]
									}
								]
							}
						},
						additionalProperties: false
					},
					ArrayExpression: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								enum: [
									'first',
									'off'
								]
							}
						]
					},
					ObjectExpression: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								enum: [
									'first',
									'off'
								]
							}
						]
					},
					ImportDeclaration: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								enum: [
									'first',
									'off'
								]
							}
						]
					},
					flatTernaryExpressions: {
						type: 'boolean',
						default: false
					},
					offsetTernaryExpressions: {
						type: 'boolean',
						default: false
					},
					ignoredNodes: {
						type: 'array',
						items: {
							type: 'string',
							not: {
								pattern: ':exit$'
							}
						}
					},
					ignoreComments: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			wrongIndentation: 'Expected indentation of {{expected}} but found {{actual}}.'
		}
	}
}