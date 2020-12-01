export const oneVarDeclarationPerLine = {
	id: 'one-var-declaration-per-line',
	key: 'one-var-declaration-per-line',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow newlines around variable declarations',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/one-var-declaration-per-line'
		},
		schema: [
			{
				enum: [
					'always',
					'initializations'
				]
			}
		],
		fixable: 'whitespace',
		messages: {
			expectVarOnNewline: 'Expected variable declaration to be on a new line.'
		}
	}
}