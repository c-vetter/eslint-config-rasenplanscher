export const noNewObject = {
	id: 'no-new-object',
	key: 'no-new-object',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `Object` constructors',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-new-object'
		},
		schema: [],
		messages: {
			preferLiteral: 'The object literal notation {} is preferrable.'
		}
	}
}