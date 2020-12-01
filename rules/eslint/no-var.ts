export const noVar = {
	id: 'no-var',
	key: 'no-var',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `let` or `const` instead of `var`',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-var'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unexpectedVar: 'Unexpected var, use let or const instead.'
		}
	}
}