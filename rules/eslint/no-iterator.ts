export const noIterator = {
	id: 'no-iterator',
	key: 'no-iterator',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of the `__iterator__` property',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-iterator'
		},
		schema: [],
		messages: {
			noIterator: 'Reserved name ‘__iterator__’.'
		}
	}
}