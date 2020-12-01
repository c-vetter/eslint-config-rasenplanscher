export const complexity = {
	id: 'complexity',
	key: 'complexity',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum cyclomatic complexity allowed in a program',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/complexity'
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
			complex: '{{name}} has a complexity of {{complexity}}. Maximum allowed is {{max}}.'
		}
	}
}