export const newlineBeforeReturn = {
	id: 'newline-before-return',
	key: 'newline-before-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require an empty line before `return` statements',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/newline-before-return'
		},
		fixable: 'whitespace',
		schema: [],
		messages: {
			expected: 'Expected newline before return statement.'
		},
		deprecated: true,
		replacedBy: [
			'padding-line-between-statements'
		]
	}
}