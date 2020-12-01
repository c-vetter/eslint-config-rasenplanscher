export const noRestrictedGlobals = {
	id: 'no-restricted-globals',
	key: 'no-restricted-globals',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow specified global variables',
			category: 'Variables',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-restricted-globals'
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
							name: {
								type: 'string'
							},
							message: {
								type: 'string'
							}
						},
						required: [
							'name'
						],
						additionalProperties: false
					}
				]
			},
			uniqueItems: true,
			minItems: 0
		},
		messages: {
			defaultMessage: 'Unexpected use of ‘{{name}}’.',
			customMessage: 'Unexpected use of ‘{{name}}’. {{customMessage}}'
		}
	}
}