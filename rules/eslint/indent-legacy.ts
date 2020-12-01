export const indentLegacy = {
	id: 'indent-legacy',
	key: 'indent-legacy',
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
			url: 'https://eslint.org/docs/rules/indent-legacy'
		},
		deprecated: true,
		replacedBy: [
			'indent'
		],
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
						minimum: 0
					},
					VariableDeclarator: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								type: 'object',
								properties: {
									var: {
										type: 'integer',
										minimum: 0
									},
									let: {
										type: 'integer',
										minimum: 0
									},
									const: {
										type: 'integer',
										minimum: 0
									}
								}
							}
						]
					},
					outerIIFEBody: {
						type: 'integer',
						minimum: 0
					},
					MemberExpression: {
						type: 'integer',
						minimum: 0
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
											'first'
										]
									}
								]
							},
							body: {
								type: 'integer',
								minimum: 0
							}
						}
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
											'first'
										]
									}
								]
							},
							body: {
								type: 'integer',
								minimum: 0
							}
						}
					},
					CallExpression: {
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
											'first'
										]
									}
								]
							}
						}
					},
					ArrayExpression: {
						oneOf: [
							{
								type: 'integer',
								minimum: 0
							},
							{
								enum: [
									'first'
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
									'first'
								]
							}
						]
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			expected: 'Expected indentation of {{expected}} but found {{actual}}.'
		}
	}
}