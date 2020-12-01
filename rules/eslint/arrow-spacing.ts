export const arrowSpacing = {
	id: 'arrow-spacing',
	key: 'arrow-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing before and after the arrow in arrow functions',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/arrow-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				type: 'object',
				properties: {
					before: {
						type: 'boolean',
						default: true
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
			expectedBefore: 'Missing space before =>.',
			unexpectedBefore: 'Unexpected space before =>.',
			expectedAfter: 'Missing space after =>.',
			unexpectedAfter: 'Unexpected space after =>.'
		}
	}
}