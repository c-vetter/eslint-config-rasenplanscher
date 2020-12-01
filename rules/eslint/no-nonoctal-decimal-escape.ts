export const noNonoctalDecimalEscape = {
	id: 'no-nonoctal-decimal-escape',
	key: 'no-nonoctal-decimal-escape',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `\\8` and `\\9` escape sequences in string literals',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-nonoctal-decimal-escape',
			suggestion: true
		},
		schema: [],
		messages: {
			decimalEscape: 'Don‘t use ’{{decimalEscape}}' escape sequence.',
			refactor: 'Replace ‘{{original}}’ with ‘{{replacement}}’. This maintains the current functionality.',
			escapeBackslash: 'Replace ‘{{original}}’ with ‘{{replacement}}’ to include the actual backslash character.'
		}
	}
}