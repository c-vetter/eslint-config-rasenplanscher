export const typescriptEslintNoRedeclare = {
	id: '@typescript-eslint/no-redeclare',
	key: 'no-redeclare',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow variable redeclaration',
			category: 'Best Practices',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-redeclare.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					builtinGlobals: {
						type: 'boolean'
					},
					ignoreDeclarationMerge: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			redeclared: '‘{{id}}’ is already defined.',
			redeclaredAsBuiltin: '‘{{id}}’ is already defined as a built-in global variable.',
			redeclaredBySyntax: '‘{{id}}’ is already defined by a variable declaration.'
		}
	}
}