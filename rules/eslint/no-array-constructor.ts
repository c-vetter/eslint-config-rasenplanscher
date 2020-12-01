export const noArrayConstructor = {
	id: 'no-array-constructor',
	key: 'no-array-constructor',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `Array` constructors',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-array-constructor'
		},
		schema: [],
		messages: {
			preferLiteral: 'The array literal notation [] is preferable.'
		}
	}
}