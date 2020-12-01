export const maxParams = {
	id: 'max-params',
	key: 'max-params',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum number of parameters in function definitions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-params'
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
			exceed: '{{name}} has too many parameters ({{count}}). Maximum allowed is {{max}}.'
		}
	}
}