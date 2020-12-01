export const idBlacklist = {
	id: 'id-blacklist',
	key: 'id-blacklist',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [
			'id-denylist'
		],
		type: 'suggestion',
		docs: {
			description: 'disallow specified identifiers',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/id-blacklist'
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