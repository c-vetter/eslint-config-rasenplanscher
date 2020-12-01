export const defaultCaseLast = {
	id: 'default-case-last',
	key: 'default-case-last',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce default clauses in switch statements to be last',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/default-case-last'
		},
		schema: [],
		messages: {
			notLast: 'Default clause should be the last clause.'
		}
	}
}