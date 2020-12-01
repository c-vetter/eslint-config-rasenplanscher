export const noExtendNative = {
	id: 'no-extend-native',
	key: 'no-extend-native',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow extending native types',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-extend-native'
		},
		schema: [
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'array',
						items: {
							type: 'string'
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: '{{builtin}} prototype is read only, properties should not be added.'
		}
	}
}