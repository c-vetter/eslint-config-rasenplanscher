export const preferReflect = {
	id: 'prefer-reflect',
	key: 'prefer-reflect',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require `Reflect` methods where applicable',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-reflect'
		},
		deprecated: true,
		replacedBy: [],
		schema: [
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'array',
						items: {
							enum: [
								'apply',
								'call',
								'delete',
								'defineProperty',
								'getOwnPropertyDescriptor',
								'getPrototypeOf',
								'setPrototypeOf',
								'isExtensible',
								'getOwnPropertyNames',
								'preventExtensions'
							]
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			preferReflect: 'Avoid using {{existing}}, instead use {{substitute}}.'
		}
	}
}