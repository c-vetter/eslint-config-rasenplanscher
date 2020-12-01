export const noTrailingSpaces = {
	id: 'no-trailing-spaces',
	key: 'no-trailing-spaces',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow trailing whitespace at the end of lines',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-trailing-spaces'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					skipBlankLines: {
						type: 'boolean',
						default: false
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
			trailingSpace: 'Trailing spaces not allowed.'
		}
	}
}