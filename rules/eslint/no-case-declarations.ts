export const noCaseDeclarations = {
	id: 'no-case-declarations',
	key: 'no-case-declarations',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow lexical declarations in case clauses',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-case-declarations'
		},
		schema: [],
		messages: {
			unexpected: 'Unexpected lexical declaration in case block.'
		}
	}
}