export const noDupeKeys = {
	id: 'no-dupe-keys',
	key: 'no-dupe-keys',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow duplicate keys in object literals',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-dupe-keys'
		},
		schema: [],
		messages: {
			unexpected: 'Duplicate key ‘{{name}}’.'
		}
	}
}