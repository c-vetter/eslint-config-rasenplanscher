export const computedPropertySpacing = {
	id: 'computed-property-spacing',
	key: 'computed-property-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing inside computed property brackets',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/computed-property-spacing'
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
					enforceForClassMembers: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedSpaceBefore: 'There should be no space before ‘{{tokenValue}}’.',
			unexpectedSpaceAfter: 'There should be no space after ‘{{tokenValue}}’.',
			missingSpaceBefore: 'A space is required before ‘{{tokenValue}}’.',
			missingSpaceAfter: 'A space is required after ‘{{tokenValue}}’.'
		}
	}
}