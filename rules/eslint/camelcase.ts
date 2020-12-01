export const camelcase = {
	id: 'camelcase',
	key: 'camelcase',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce camelcase naming convention',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/camelcase'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreDestructuring: {
						type: 'boolean',
						default: false
					},
					ignoreImports: {
						type: 'boolean',
						default: false
					},
					ignoreGlobals: {
						type: 'boolean',
						default: false
					},
					properties: {
						enum: [
							'always',
							'never'
						]
					},
					allow: {
						type: 'array',
						items: [
							{
								type: 'string'
							}
						],
						minItems: 0,
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			notCamelCase: 'Identifier ‘{{name}}’ is not in camel case.'
		}
	}
}