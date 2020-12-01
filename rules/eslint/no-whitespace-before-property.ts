export const noWhitespaceBeforeProperty = {
	id: 'no-whitespace-before-property',
	key: 'no-whitespace-before-property',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'disallow whitespace before properties',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-whitespace-before-property'
		},
		fixable: 'whitespace',
		schema: [],
		messages: {
			unexpectedWhitespace: 'Unexpected whitespace before property {{propName}}.'
		}
	}
}