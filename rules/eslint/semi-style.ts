export const semiStyle = {
	id: 'semi-style',
	key: 'semi-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce location of semicolons',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/semi-style'
		},
		schema: [
			{
				enum: [
					'last',
					'first'
				]
			}
		],
		fixable: 'whitespace',
		messages: {
			expectedSemiColon: 'Expected this semicolon to be at {{pos}}.'
		}
	}
}