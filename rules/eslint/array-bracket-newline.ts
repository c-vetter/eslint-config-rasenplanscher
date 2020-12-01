export const arrayBracketNewline = {
	id: 'array-bracket-newline',
	key: 'array-bracket-newline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce linebreaks after opening and before closing array brackets',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/array-bracket-newline'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'always',
							'never',
							'consistent'
						]
					},
					{
						type: 'object',
						properties: {
							multiline: {
								type: 'boolean'
							},
							minItems: {
								type: [
									'integer',
									'null'
								],
								minimum: 0
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			unexpectedOpeningLinebreak: 'There should be no linebreak after ‘[’.',
			unexpectedClosingLinebreak: 'There should be no linebreak before ‘]’.',
			missingOpeningLinebreak: 'A linebreak is required after ‘[’.',
			missingClosingLinebreak: 'A linebreak is required before ‘]’.'
		}
	}
}