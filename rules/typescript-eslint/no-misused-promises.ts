export const typescriptEslintNoMisusedPromises = {
	id: '@typescript-eslint/no-misused-promises',
	key: 'no-misused-promises',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Avoid using promises in places not designed to handle them',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-misused-promises.md'
		},
		messages: {
			voidReturn: 'Promise returned in function argument where a void return was expected.',
			conditional: 'Expected non-Promise value in a boolean conditional.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					checksConditionals: {
						type: 'boolean'
					},
					checksVoidReturn: {
						type: 'boolean'
					}
				}
			}
		],
		type: 'problem'
	}
}