export const noExtraParens = {
	id: 'no-extra-parens',
	key: 'no-extra-parens',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow unnecessary parentheses',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-extra-parens'
		},
		fixable: 'code',
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'functions'
							]
						}
					],
					minItems: 0,
					maxItems: 1
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'all'
							]
						},
						{
							type: 'object',
							properties: {
								conditionalAssign: {
									type: 'boolean'
								},
								nestedBinaryExpressions: {
									type: 'boolean'
								},
								returnAssign: {
									type: 'boolean'
								},
								ignoreJSX: {
									enum: [
										'none',
										'all',
										'single-line',
										'multi-line'
									]
								},
								enforceForArrowConditionals: {
									type: 'boolean'
								},
								enforceForSequenceExpressions: {
									type: 'boolean'
								},
								enforceForNewInMemberExpressions: {
									type: 'boolean'
								},
								enforceForFunctionPrototypeMethods: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					],
					minItems: 0,
					maxItems: 2
				}
			]
		},
		messages: {
			unexpected: 'Unnecessary parentheses around expression.'
		}
	}
}