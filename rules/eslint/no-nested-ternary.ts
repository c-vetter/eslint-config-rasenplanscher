export const noNestedTernary = {
	id: 'no-nested-ternary',
	key: 'no-nested-ternary',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow nested ternary expressions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-nested-ternary'
		},
		schema: [],
		messages: {
			noNestedTernary: 'Do not nest ternary expressions.'
		}
	}
}