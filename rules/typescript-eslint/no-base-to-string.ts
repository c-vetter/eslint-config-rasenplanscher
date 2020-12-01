export const typescriptEslintNoBaseToString = {
	id: '@typescript-eslint/no-base-to-string',
	key: 'no-base-to-string',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires that `.toString()` is only called on objects which provide useful information when stringified',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-base-to-string.md'
		},
		messages: {
			baseToString: '‘{{name}} {{certainty}} evaluate to ’[object Object]' when stringified.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoredTypeNames: {
						type: 'array',
						items: {
							type: 'string'
						}
					}
				},
				additionalProperties: false
			}
		],
		type: 'suggestion'
	}
}