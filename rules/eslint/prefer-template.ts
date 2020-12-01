export const preferTemplate = {
	id: 'prefer-template',
	key: 'prefer-template',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require template literals instead of string concatenation',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-template'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unexpectedStringConcatenation: 'Unexpected string concatenation.'
		}
	}
}