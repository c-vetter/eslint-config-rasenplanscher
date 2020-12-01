export const objectCurlySpacing = {
	id: 'object-curly-spacing',
	key: 'object-curly-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing inside braces',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/object-curly-spacing'
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
					arraysInObjects: {
						type: 'boolean'
					},
					objectsInObjects: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			requireSpaceBefore: 'A space is required before ‘{{token}}’.',
			requireSpaceAfter: 'A space is required after ‘{{token}}’.',
			unexpectedSpaceBefore: 'There should be no space before ‘{{token}}’.',
			unexpectedSpaceAfter: 'There should be no space after ‘{{token}}’.'
		}
	}
}