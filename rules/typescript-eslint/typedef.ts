export const typescriptEslintTypedef = {
	id: '@typescript-eslint/typedef',
	key: 'typedef',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires type annotations to exist',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/typedef.md'
		},
		messages: {
			expectedTypedef: 'Expected a type annotation.',
			expectedTypedefNamed: 'Expected {{name}} to have a type annotation.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					arrayDestructuring: {
						type: 'boolean'
					},
					arrowParameter: {
						type: 'boolean'
					},
					memberVariableDeclaration: {
						type: 'boolean'
					},
					objectDestructuring: {
						type: 'boolean'
					},
					parameter: {
						type: 'boolean'
					},
					propertyDeclaration: {
						type: 'boolean'
					},
					variableDeclaration: {
						type: 'boolean'
					},
					variableDeclarationIgnoreFunction: {
						type: 'boolean'
					}
				}
			}
		],
		type: 'suggestion'
	}
}