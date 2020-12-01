export const noSync = {
	id: 'no-sync',
	key: 'no-sync',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		deprecated: true,
		replacedBy: [],
		type: 'suggestion',
		docs: {
			description: 'disallow synchronous methods',
			category: 'Node.js and CommonJS',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-sync'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowAtRootLevel: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			noSync: 'Unexpected sync method: ‘{{propertyName}}’.'
		}
	}
}