export const noNewSymbol = {
	id: 'no-new-symbol',
	key: 'no-new-symbol',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow `new` operators with the `Symbol` object',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-new-symbol'
		},
		schema: [],
		messages: {
			noNewSymbol: '`Symbol` cannot be called as a constructor.'
		}
	}
}