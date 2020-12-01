export const idDenylist = {
	id: 'id-denylist',
	key: 'id-denylist',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow specified identifiers',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/id-denylist'
		},
		schema: {
			type: 'array',
			items: {
				type: 'string'
			},
			uniqueItems: true
		},
		messages: {
			restricted: 'Identifier ‘{{name}}’ is restricted.'
		}
	}
}