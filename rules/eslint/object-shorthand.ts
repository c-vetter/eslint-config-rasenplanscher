export const objectShorthand = {
	id: 'object-shorthand',
	key: 'object-shorthand',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow method and property shorthand syntax for object literals',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/object-shorthand'
		},
		fixable: 'code',
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'methods',
								'properties',
								'never',
								'consistent',
								'consistent-as-needed'
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
								'always',
								'methods',
								'properties'
							]
						},
						{
							type: 'object',
							properties: {
								avoidQuotes: {
									type: 'boolean'
								}
							},
							additionalProperties: false
						}
					],
					minItems: 0,
					maxItems: 2
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'methods'
							]
						},
						{
							type: 'object',
							properties: {
								ignoreConstructors: {
									type: 'boolean'
								},
								avoidQuotes: {
									type: 'boolean'
								},
								avoidExplicitReturnArrows: {
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
			expectedAllPropertiesShorthanded: 'Expected shorthand for all properties.',
			expectedLiteralMethodLongform: 'Expected longform method syntax for string literal keys.',
			expectedPropertyShorthand: 'Expected property shorthand.',
			expectedPropertyLongform: 'Expected longform property syntax.',
			expectedMethodShorthand: 'Expected method shorthand.',
			expectedMethodLongform: 'Expected longform method syntax.',
			unexpectedMix: 'Unexpected mix of shorthand and non-shorthand properties.'
		}
	}
}