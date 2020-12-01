export const noNewWrappers = {
	id: 'no-new-wrappers',
	key: 'no-new-wrappers',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `new` operators with the `String`, `Number`, and `Boolean` objects',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-new-wrappers'
		},
		schema: [],
		messages: {
			noConstructor: 'Do not use {{fn}} as a constructor.'
		}
	}
}