export const switchColonSpacing = {
	id: 'switch-colon-spacing',
	key: 'switch-colon-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce spacing around colons of switch statements',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/switch-colon-spacing'
		},
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
		fixable: 'whitespace',
		messages: {
			expectedBefore: 'Expected space(s) before this colon.',
			expectedAfter: 'Expected space(s) after this colon.',
			unexpectedBefore: 'Unexpected space(s) before this colon.',
			unexpectedAfter: 'Unexpected space(s) after this colon.'
		}
	}
}