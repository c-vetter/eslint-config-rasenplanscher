export const maxNestedCallbacks = {
	id: 'max-nested-callbacks',
	key: 'max-nested-callbacks',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum depth that callbacks can be nested',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-nested-callbacks'
		},
		schema: [
			{
				oneOf: [
					{
						type: 'integer',
						minimum: 0
					},
					{
						type: 'object',
						properties: {
							maximum: {
								type: 'integer',
								minimum: 0
							},
							max: {
								type: 'integer',
								minimum: 0
							}
						},
						additionalProperties: false
					}
				]
			}
		],
		messages: {
			exceed: 'Too many nested callbacks ({{num}}). Maximum allowed is {{max}}.'
		}
	}
}