export const noDupeElseIf = {
	id: 'no-dupe-else-if',
	key: 'no-dupe-else-if',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow duplicate conditions in if-else-if chains',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-dupe-else-if'
		},
		schema: [],
		messages: {
			unexpected: 'This branch can never execute. Its condition is a duplicate or covered by previous conditions in the if-else-if chain.'
		}
	}
}