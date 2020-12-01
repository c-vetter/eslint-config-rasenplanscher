export const funcCallSpacing = {
	id: 'func-call-spacing',
	key: 'func-call-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow spacing between function identifiers and their invocations',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/func-call-spacing'
		},
		fixable: 'whitespace',
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
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
								'always'
							]
						},
						{
							type: 'object',
							properties: {
								allowNewlines: {
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
			unexpectedWhitespace: 'Unexpected whitespace between function name and paren.',
			unexpectedNewline: 'Unexpected newline between function name and paren.',
			missing: 'Missing space between function name and paren.'
		}
	}
}