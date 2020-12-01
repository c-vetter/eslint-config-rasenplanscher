export const maxStatements = {
	id: 'max-statements',
	key: 'max-statements',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum number of statements allowed in function blocks',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-statements'
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
			},
			{
				type: 'object',
				properties: {
					ignoreTopLevelFunctions: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			exceed: '{{name}} has too many statements ({{count}}). Maximum allowed is {{max}}.'
		}
	}
}