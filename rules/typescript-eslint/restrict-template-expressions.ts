export const typescriptEslintRestrictTemplateExpressions = {
	id: '@typescript-eslint/restrict-template-expressions',
	key: 'restrict-template-expressions',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'Enforce template literal expressions to be of string type',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/restrict-template-expressions.md'
		},
		messages: {
			invalidType: 'Invalid type “{{type}}” of template literal expression.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowNumber: {
						type: 'boolean'
					},
					allowBoolean: {
						type: 'boolean'
					},
					allowAny: {
						type: 'boolean'
					},
					allowNullish: {
						type: 'boolean'
					}
				}
			}
		]
	}
}