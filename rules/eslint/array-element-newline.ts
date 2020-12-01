export const arrayElementNewline = {
	id: 'array-element-newline',
	key: 'array-element-newline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce line breaks after each array element',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/array-element-newline'
		},
		fixable: 'whitespace',
		schema: {
			definitions: {
				basicConfig: {
					oneOf: [
						{
							enum: [
								'always',
								'never',
								'consistent'
							]
						},
						{
							type: 'object',
							properties: {
								multiline: {
									type: 'boolean'
								},
								minItems: {
									type: [
										'integer',
										'null'
									],
									minimum: 0
								}
							},
							additionalProperties: false
						}
					]
				}
			},
			items: [
				{
					oneOf: [
						{
							'$ref': '#/definitions/basicConfig'
						},
						{
							type: 'object',
							properties: {
								ArrayExpression: {
									'$ref': '#/definitions/basicConfig'
								},
								ArrayPattern: {
									'$ref': '#/definitions/basicConfig'
								}
							},
							additionalProperties: false,
							minProperties: 1
						}
					]
				}
			]
		},
		messages: {
			unexpectedLineBreak: 'There should be no linebreak here.',
			missingLineBreak: 'There should be a linebreak after this element.'
		}
	}
}