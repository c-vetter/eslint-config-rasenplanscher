export const typescriptEslintPreferNullishCoalescing = {
	id: '@typescript-eslint/prefer-nullish-coalescing',
	key: 'prefer-nullish-coalescing',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Enforce the usage of the nullish coalescing operator instead of logical chaining',
			category: 'Best Practices',
			recommended: false,
			suggestion: true,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md'
		},
		messages: {
			preferNullish: 'Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator.',
			suggestNullish: 'Fix to nullish coalescing operator (`??`).'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreConditionalTests: {
						type: 'boolean'
					},
					ignoreMixedLogicalExpressions: {
						type: 'boolean'
					},
					forceSuggestionFixer: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}