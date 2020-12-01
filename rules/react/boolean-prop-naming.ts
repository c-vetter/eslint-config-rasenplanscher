export const reactBooleanPropNaming = {
	id: 'react/boolean-prop-naming',
	key: 'boolean-prop-naming',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Stylistic Issues',
			description: 'Enforces consistent naming for boolean props',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md'
		},
		schema: [
			{
				additionalProperties: false,
				properties: {
					propTypeNames: {
						items: {
							type: 'string'
						},
						minItems: 1,
						type: 'array',
						uniqueItems: true
					},
					rule: {
						default: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
						minLength: 1,
						type: 'string'
					},
					message: {
						minLength: 1,
						type: 'string'
					},
					validateNested: {
						default: false,
						type: 'boolean'
					}
				},
				type: 'object'
			}
		]
	}
}