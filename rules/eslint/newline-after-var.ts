export const newlineAfterVar = {
	id: 'newline-after-var',
	key: 'newline-after-var',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow an empty line after variable declarations',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/newline-after-var'
		},
		schema: [
			{
				enum: [
					'never',
					'always'
				]
			}
		],
		fixable: 'whitespace',
		messages: {
			expected: 'Expected blank line after variable declarations.',
			unexpected: 'Unexpected blank line after variable declarations.'
		},
		deprecated: true,
		replacedBy: [
			'padding-line-between-statements'
		]
	}
}