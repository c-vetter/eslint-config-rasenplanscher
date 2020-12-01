export const typescriptEslintNoThisAlias = {
	id: '@typescript-eslint/no-this-alias',
	key: 'no-this-alias',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallow aliasing `this`',
			category: 'Best Practices',
			recommended: 'error',
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-this-alias.md'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					allowDestructuring: {
						type: 'boolean'
					},
					allowedNames: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				}
			}
		],
		messages: {
			thisAssignment: 'Unexpected aliasing of ‘this’ to local variable.',
			thisDestructure: 'Unexpected aliasing of members of ‘this’ to local variables.'
		}
	}
}