export const noGlobalAssign = {
	id: 'no-global-assign',
	key: 'no-global-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow assignments to native objects or read-only global variables',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-global-assign'
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
			globalShouldNotBeModified: 'Read-only global ‘{{name}}’ should not be modified.'
		}
	}
}