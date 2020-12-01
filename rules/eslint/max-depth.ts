export const maxDepth = {
	id: 'max-depth',
	key: 'max-depth',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a maximum depth that blocks can be nested',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/max-depth'
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
			tooDeeply: 'Blocks are nested too deeply ({{depth}}). Maximum allowed is {{maxDepth}}.'
		}
	}
}