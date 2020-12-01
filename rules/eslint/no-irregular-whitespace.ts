export const noIrregularWhitespace = {
	id: 'no-irregular-whitespace',
	key: 'no-irregular-whitespace',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow irregular whitespace',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-irregular-whitespace'
		},
		schema: [
			{
				type: 'object',
				properties: {
					skipComments: {
						type: 'boolean',
						default: false
					},
					skipStrings: {
						type: 'boolean',
						default: true
					},
					skipTemplates: {
						type: 'boolean',
						default: false
					},
					skipRegExps: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			noIrregularWhitespace: 'Irregular whitespace not allowed.'
		}
	}
}