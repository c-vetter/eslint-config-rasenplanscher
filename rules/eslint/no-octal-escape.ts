export const noOctalEscape = {
	id: 'no-octal-escape',
	key: 'no-octal-escape',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow octal escape sequences in string literals',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-octal-escape'
		},
		schema: [],
		messages: {
			octalEscapeSequence: 'Don‘t use octal: ’\\{{sequence}}‘. Use ’\\u....' instead.'
		}
	}
}