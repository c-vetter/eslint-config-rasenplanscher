export const noUndefined = {
	id: 'no-undefined',
	key: 'no-undefined',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `undefined` as an identifier',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-undefined'
		},
		schema: [],
		messages: {
			unexpectedUndefined: 'Unexpected use of undefined.'
		}
	}
}