export const typescriptEslintUnboundMethod = {
	id: '@typescript-eslint/unbound-method',
	key: 'unbound-method',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			category: 'Best Practices',
			description: 'Enforces unbound methods are called with their expected scope',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/unbound-method.md'
		},
		messages: {
			unbound: 'Avoid referencing unbound methods which may cause unintentional scoping of `this`.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreStatic: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		type: 'problem'
	}
}