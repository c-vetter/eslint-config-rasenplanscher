export const operatorLinebreak = {
	id: 'operator-linebreak',
	key: 'operator-linebreak',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent linebreak style for operators',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/operator-linebreak'
		},
		schema: [
			{
				enum: [
					'after',
					'before',
					'none',
					null
				]
			},
			{
				type: 'object',
				properties: {
					overrides: {
						type: 'object',
						additionalProperties: {
							enum: [
								'after',
								'before',
								'none',
								'ignore'
							]
						}
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			operatorAtBeginning: '‘{{operator}}’ should be placed at the beginning of the line.',
			operatorAtEnd: '‘{{operator}}’ should be placed at the end of the line.',
			badLinebreak: 'Bad line breaking before and after ‘{{operator}}’.',
			noLinebreak: 'There should be no line break before or after ‘{{operator}}’.'
		}
	}
}