export const noDupeArgs = {
	id: 'no-dupe-args',
	key: 'no-dupe-args',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow duplicate arguments in `function` definitions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-dupe-args'
		},
		schema: [],
		messages: {
			unexpected: 'Duplicate param ‘{{name}}’.'
		}
	}
}