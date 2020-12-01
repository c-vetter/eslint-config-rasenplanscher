export const semiSpacing = {
	id: 'semi-spacing',
	key: 'semi-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing before and after semicolons',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/semi-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					before: {
						type: 'boolean',
						default: false
					},
					after: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedWhitespaceBefore: 'Unexpected whitespace before semicolon.',
			unexpectedWhitespaceAfter: 'Unexpected whitespace after semicolon.',
			missingWhitespaceBefore: 'Missing whitespace before semicolon.',
			missingWhitespaceAfter: 'Missing whitespace after semicolon.'
		}
	}
}