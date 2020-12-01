export const noUselessConstructor = {
	id: 'no-useless-constructor',
	key: 'no-useless-constructor',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary constructors',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-constructor'
		},
		schema: [],
		messages: {
			noUselessConstructor: 'Useless constructor.'
		}
	}
}