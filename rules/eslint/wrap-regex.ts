export const wrapRegex = {
	id: 'wrap-regex',
	key: 'wrap-regex',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require parenthesis around regex literals',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/wrap-regex'
		},
		schema: [],
		fixable: 'code',
		messages: {
			requireParens: 'Wrap the regexp literal in parens to disambiguate the slash.'
		}
	}
}