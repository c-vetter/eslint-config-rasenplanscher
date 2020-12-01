export const noUselessReturn = {
	id: 'no-useless-return',
	key: 'no-useless-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow redundant return statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-return'
		},
		fixable: 'code',
		schema: [],
		messages: {
			unnecessaryReturn: 'Unnecessary return statement.'
		}
	}
}