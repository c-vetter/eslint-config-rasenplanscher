export const preferSpread = {
	id: 'prefer-spread',
	key: 'prefer-spread',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require spread operators instead of `.apply()`',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-spread'
		},
		schema: [],
		fixable: null,
		messages: {
			preferSpread: 'Use the spread operator instead of ‘.apply()’.'
		}
	}
}