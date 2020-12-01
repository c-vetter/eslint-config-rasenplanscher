export const noNativeReassign = {
	id: 'no-native-reassign',
	key: 'no-native-reassign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow assignments to native objects or read-only global variables',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-native-reassign'
		},
		deprecated: true,
		replacedBy: [
			'no-global-assign'
		],
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
			nativeReassign: 'Read-only global ‘{{name}}’ should not be modified.'
		}
	}
}