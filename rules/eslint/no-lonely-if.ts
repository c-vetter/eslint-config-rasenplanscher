export const noLonelyIf = {
	id: 'no-lonely-if',
	key: 'no-lonely-if',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `if` statements as the only statement in `else` blocks',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-lonely-if'
		},
		schema: [],
		fixable: 'code',
		messages: {
			unexpectedLonelyIf: 'Unexpected if as the only statement in an else block.'
		}
	}
}