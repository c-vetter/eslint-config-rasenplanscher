export const noRestrictedSyntax = {
	id: 'no-restricted-syntax',
	key: 'no-restricted-syntax',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow specified syntax',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-restricted-syntax'
		},
		schema: {
			type: 'array',
			items: {
				oneOf: [
					{
						type: 'string'
					},
					{
						type: 'object',
						properties: {
							selector: {
								type: 'string'
							},
							message: {
								type: 'string'
							}
						},
						required: [
							'selector'
						],
						additionalProperties: false
					}
				]
			},
			uniqueItems: true,
			minItems: 0
		},
		messages: {
			restrictedSyntax: '{{message}}'
		}
	}
}