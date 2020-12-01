export const arrowBodyStyle = {
	id: 'arrow-body-style',
	key: 'arrow-body-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require braces around arrow function bodies',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/arrow-body-style'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'never'
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
								'as-needed'
							]
						},
						{
							type: 'object',
							properties: {
								requireReturnForObjectLiteral: {
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
		fixable: 'code',
		messages: {
			unexpectedOtherBlock: 'Unexpected block statement surrounding arrow body.',
			unexpectedEmptyBlock: 'Unexpected block statement surrounding arrow body; put a value of `undefined` immediately after the `=>`.',
			unexpectedObjectBlock: 'Unexpected block statement surrounding arrow body; parenthesize the returned value and move it immediately after the `=>`.',
			unexpectedSingleBlock: 'Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.',
			expectedBlock: 'Expected block statement surrounding arrow body.'
		}
	}
}