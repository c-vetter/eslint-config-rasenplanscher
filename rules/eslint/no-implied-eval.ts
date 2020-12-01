export const noImpliedEval = {
	id: 'no-implied-eval',
	key: 'no-implied-eval',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `eval()`-like methods',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-implied-eval'
		},
		schema: [],
		messages: {
			impliedEval: 'Implied eval. Consider passing a function instead of a string.'
		}
	}
}