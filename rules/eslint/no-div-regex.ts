export const noDivRegex = {
	id: 'no-div-regex',
	key: 'no-div-regex',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow division operators explicitly at the beginning of regular expressions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-div-regex'
		},
		fixable: 'code',
		schema: [],
		messages: {
			unexpected: 'A regular expression literal can be confused with ‘/=’.'
		}
	}
}