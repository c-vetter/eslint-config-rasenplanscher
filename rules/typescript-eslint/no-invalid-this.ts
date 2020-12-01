export const typescriptEslintNoInvalidThis = {
	id: '@typescript-eslint/no-invalid-this',
	key: 'no-invalid-this',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow `this` keywords outside of classes or class-like objects',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-invalid-this.md'
		},
		messages: {
			unexpectedThis: 'Unexpected ‘this’.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					capIsConstructor: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		]
	}
}