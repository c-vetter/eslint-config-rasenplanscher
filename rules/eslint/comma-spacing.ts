export const commaSpacing = {
	id: 'comma-spacing',
	key: 'comma-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent spacing before and after commas',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/comma-spacing'
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
			missing: 'A space is required {{loc}} ‘,’.',
			unexpected: 'There should be no space {{loc}} ‘,’.'
		}
	}
}