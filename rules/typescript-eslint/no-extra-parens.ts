export const typescriptEslintNoExtraParens = {
	id: '@typescript-eslint/no-extra-parens',
	key: 'no-extra-parens',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Disallow unnecessary parentheses',
			category: 'Possible Errors',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-extra-parens.md'
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