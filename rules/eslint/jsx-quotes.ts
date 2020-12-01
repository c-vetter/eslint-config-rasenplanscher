export const jsxQuotes = {
	id: 'jsx-quotes',
	key: 'jsx-quotes',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce the consistent use of either double or single quotes in JSX attributes',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/jsx-quotes'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'prefer-single',
					'prefer-double'
				]
			}
		],
		messages: {
			unexpected: 'Unexpected usage of {{description}}.'
		}
	}
}