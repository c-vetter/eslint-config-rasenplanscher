export const noImplicitGlobals = {
	id: 'no-implicit-globals',
	key: 'no-implicit-globals',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow declarations in the global scope',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-implicit-globals'
		},
		schema: [
			{
				type: 'object',
				properties: {
					lexicalBindings: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			globalNonLexicalBinding: 'Unexpected {{kind}} declaration in the global scope, wrap in an IIFE for a local variable, assign as global property for a global variable.',
			globalLexicalBinding: 'Unexpected {{kind}} declaration in the global scope, wrap in a block or in an IIFE.',
			globalVariableLeak: 'Global variable leak, declare the variable if it is intended to be local.',
			assignmentToReadonlyGlobal: 'Unexpected assignment to read-only global variable.',
			redeclarationOfReadonlyGlobal: 'Unexpected redeclaration of read-only global variable.'
		}
	}
}