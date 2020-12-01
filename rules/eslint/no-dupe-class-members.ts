export const noDupeClassMembers = {
	id: 'no-dupe-class-members',
	key: 'no-dupe-class-members',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow duplicate class members',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-dupe-class-members'
		},
		schema: [],
		messages: {
			unexpected: 'Duplicate name ‘{{name}}’.'
		}
	}
}