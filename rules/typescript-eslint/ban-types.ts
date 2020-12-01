export const typescriptEslintBanTypes = {
	id: '@typescript-eslint/ban-types',
	key: 'ban-types',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Bans specific types from being used',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/ban-types.md'
		},
		fixable: 'code',
		messages: {
			bannedTypeMessage: 'Don't use `{{name}}` as a type.{{customMessage}}'
		},
		schema: [
			{
				type: 'object',
				properties: {
					types: {
						type: 'object',
						additionalProperties: {
							oneOf: [
								{
									type: 'null'
								},
								{
									type: 'boolean'
								},
								{
									type: 'string'
								},
								{
									type: 'object',
									properties: {
										message: {
											type: 'string'
										},
										fixWith: {
											type: 'string'
										}
									},
									additionalProperties: false
								}
							]
						}
					},
					extendDefaults: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}