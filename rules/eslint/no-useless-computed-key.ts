export const noUselessComputedKey = {
	id: 'no-useless-computed-key',
	key: 'no-useless-computed-key',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow unnecessary computed property keys in objects and classes',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-useless-computed-key'
		},
		schema: [
			{
				type: 'object',
				properties: {
					enforceForClassMembers: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			unnecessarilyComputedProperty: 'Unnecessarily computed property [{{property}}] found.'
		}
	}
}