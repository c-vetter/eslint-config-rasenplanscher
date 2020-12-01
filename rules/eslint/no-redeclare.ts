export const noRedeclare = {
	id: 'no-redeclare',
	key: 'no-redeclare',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow variable redeclaration',
			category: 'Best Practices',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-redeclare'
		},
		messages: {
			redeclared: '‘{{id}}’ is already defined.',
			redeclaredAsBuiltin: '‘{{id}}’ is already defined as a built-in global variable.',
			redeclaredBySyntax: '‘{{id}}’ is already defined by a variable declaration.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					builtinGlobals: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		]
	}
}