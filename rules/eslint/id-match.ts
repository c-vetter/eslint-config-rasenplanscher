export const idMatch = {
	id: 'id-match',
	key: 'id-match',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require identifiers to match a specified regular expression',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/id-match'
		},
		schema: [
			{
				type: 'string'
			},
			{
				type: 'object',
				properties: {
					properties: {
						type: 'boolean',
						default: false
					},
					onlyDeclarations: {
						type: 'boolean',
						default: false
					},
					ignoreDestructuring: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			notMatch: 'Identifier ‘{{name}}’ does not match the pattern ‘{{pattern}}’.'
		}
	}
}