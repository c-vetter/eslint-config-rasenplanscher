export const noLabels = {
	id: 'no-labels',
	key: 'no-labels',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow labeled statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-labels'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowLoop: {
						type: 'boolean',
						default: false
					},
					allowSwitch: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedLabel: 'Unexpected labeled statement.',
			unexpectedLabelInBreak: 'Unexpected label in break statement.',
			unexpectedLabelInContinue: 'Unexpected label in continue statement.'
		}
	}
}