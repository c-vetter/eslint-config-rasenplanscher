export const noUselessCatch = {
	id: 'no-useless-catch',
	key: 'no-useless-catch',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary `catch` clauses',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-useless-catch'
		},
		schema: [],
		messages: {
			unnecessaryCatchClause: 'Unnecessary catch clause.',
			unnecessaryCatch: 'Unnecessary try/catch wrapper.'
		}
	}
}