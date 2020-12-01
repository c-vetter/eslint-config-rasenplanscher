export const arrayBracketSpacing = {
	id: 'array-bracket-spacing',
	key: 'array-bracket-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing inside array brackets',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/array-bracket-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			},
			{
				type: 'object',
				properties: {
					singleValue: {
						type: 'boolean'
					},
					objectsInArrays: {
						type: 'boolean'
					},
					arraysInArrays: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedSpaceAfter: 'There should be no space after ‘{{tokenValue}}’.',
			unexpectedSpaceBefore: 'There should be no space before ‘{{tokenValue}}’.',
			missingSpaceAfter: 'A space is required after ‘{{tokenValue}}’.',
			missingSpaceBefore: 'A space is required before ‘{{tokenValue}}’.'
		}
	}
}