export const linesAroundDirective = {
	id: 'lines-around-directive',
	key: 'lines-around-directive',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow newlines around directives',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/lines-around-directive'
		},
		schema: [
			{
				oneOf: [
					{
						enum: [
							'always',
							'never'
						]
					},
					{
						type: 'object',
						properties: {
							before: {
								enum: [
									'always',
									'never'
								]
							},
							after: {
								enum: [
									'always',
									'never'
								]
							}
						},
						additionalProperties: false,
						minProperties: 2
					}
				]
			}
		],
		fixable: 'whitespace',
		messages: {
			expected: 'Expected newline {{location}} “{{value}}” directive.',
			unexpected: 'Unexpected newline {{location}} “{{value}}” directive.'
		},
		deprecated: true,
		replacedBy: [
			'padding-line-between-statements'
		]
	}
}