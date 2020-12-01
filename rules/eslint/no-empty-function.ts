export const noEmptyFunction = {
	id: 'no-empty-function',
	key: 'no-empty-function',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow empty functions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-empty-function'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						type: 'array',
						items: {
							enum: [
								'functions',
								'arrowFunctions',
								'generatorFunctions',
								'methods',
								'generatorMethods',
								'getters',
								'setters',
								'constructors',
								'asyncFunctions',
								'asyncMethods'
							]
						},
						uniqueItems: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'Unexpected empty {{name}}.'
		}
	}
}