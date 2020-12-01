export const typescriptEslintNoEmptyFunction = {
	id: '@typescript-eslint/no-empty-function',
	key: 'no-empty-function',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow empty functions',
			category: 'Best Practices',
			recommended: 'error',
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-empty-function.md'
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
								'private-constructors',
								'protected-constructors',
								'asyncFunctions',
								'asyncMethods',
								'decoratedFunctions'
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