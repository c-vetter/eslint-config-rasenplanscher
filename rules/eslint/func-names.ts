export const funcNames = {
	id: 'func-names',
	key: 'func-names',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow named `function` expressions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/func-names'
		},
		schema: {
			definitions: {
				value: {
					enum: [
						'always',
						'as-needed',
						'never'
					]
				}
			},
			items: [
				{
					'$ref': '#/definitions/value'
				},
				{
					type: 'object',
					properties: {
						generators: {
							'$ref': '#/definitions/value'
						}
					},
					additionalProperties: false
				}
			]
		},
		messages: {
			unnamed: 'Unexpected unnamed {{name}}.',
			named: 'Unexpected named {{name}}.'
		}
	}
}