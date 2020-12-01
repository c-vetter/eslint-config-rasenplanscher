export const preferNumericLiterals = {
	id: 'prefer-numeric-literals',
	key: 'prefer-numeric-literals',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-numeric-literals'
		},
		schema: [],
		messages: {
			useLiteral: 'Use {{system}} literals instead of {{functionName}}().'
		},
		fixable: 'code'
	}
}