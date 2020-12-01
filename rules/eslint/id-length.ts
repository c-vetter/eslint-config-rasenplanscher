export const idLength = {
	id: 'id-length',
	key: 'id-length',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce minimum and maximum identifier lengths',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/id-length'
		},
		schema: [
			{
				type: 'object',
				properties: {
					min: {
						type: 'integer',
						default: 2
					},
					max: {
						type: 'integer'
					},
					exceptions: {
						type: 'array',
						uniqueItems: true,
						items: {
							type: 'string'
						}
					},
					exceptionPatterns: {
						type: 'array',
						uniqueItems: true,
						items: {
							type: 'string'
						}
					},
					properties: {
						enum: [
							'always',
							'never'
						]
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			tooShort: 'Identifier name ‘{{name}}’ is too short (< {{min}}).',
			tooLong: 'Identifier name ‘{{name}}’ is too long (> {{max}}).'
		}
	}
}