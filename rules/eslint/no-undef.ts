export const noUndef = {
	id: 'no-undef',
	key: 'no-undef',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow the use of undeclared variables unless mentioned in `/*global */` comments',
			category: 'Variables',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-undef'
		},
		schema: [
			{
				type: 'object',
				properties: {
					typeof: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			undef: '‘{{name}}’ is not defined.'
		}
	}
}