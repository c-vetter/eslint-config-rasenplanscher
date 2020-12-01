export const noContinue = {
	id: 'no-continue',
	key: 'no-continue',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `continue` statements',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-continue'
		},
		schema: [],
		messages: {
			unexpected: 'Unexpected use of continue statement.'
		}
	}
}