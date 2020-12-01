export const typescriptEslintNoFloatingPromises = {
	id: '@typescript-eslint/no-floating-promises',
	key: 'no-floating-promises',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires Promise-like values to be handled appropriately',
			category: 'Best Practices',
			recommended: 'error',
			suggestion: true,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-floating-promises.md'
		},
		messages: {
			floating: 'Promises must be handled appropriately.',
			floatingVoid: 'Promises must be handled appropriately or explicitly marked as ignored with the `void` operator.',
			floatingFixVoid: 'Add void operator to ignore.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreVoid: {
						type: 'boolean'
					},
					ignoreIIFE: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		type: 'problem'
	}
}