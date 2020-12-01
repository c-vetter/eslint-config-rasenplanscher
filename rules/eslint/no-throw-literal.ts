export const noThrowLiteral = {
	id: 'no-throw-literal',
	key: 'no-throw-literal',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow throwing literals as exceptions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-throw-literal'
		},
		schema: [],
		messages: {
			object: 'Expected an error object to be thrown.',
			undef: 'Do not throw undefined.'
		}
	}
}