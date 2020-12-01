export const classMethodsUseThis = {
	id: 'class-methods-use-this',
	key: 'class-methods-use-this',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce that class methods utilize `this`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/class-methods-use-this'
		},
		schema: [
			{
				type: 'object',
				properties: {
					exceptMethods: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			missingThis: 'Expected ‘this’ to be used by class {{name}}.'
		}
	}
}