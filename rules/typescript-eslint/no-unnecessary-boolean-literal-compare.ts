export const typescriptEslintNoUnnecessaryBooleanLiteralCompare = {
	id: '@typescript-eslint/no-unnecessary-boolean-literal-compare',
	key: 'no-unnecessary-boolean-literal-compare',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Flags unnecessary equality comparisons against boolean literals',
			category: 'Stylistic Issues',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md'
		},
		fixable: 'code',
		messages: {
			direct: 'This expression unnecessarily compares a boolean value to a boolean instead of using it directly.',
			negated: 'This expression unnecessarily compares a boolean value to a boolean instead of negating it.',
			comparingNullableToTrueDirect: 'This expression unnecessarily compares a nullable boolean value to true instead of using it directly.',
			comparingNullableToTrueNegated: 'This expression unnecessarily compares a nullable boolean value to true instead of negating it.',
			comparingNullableToFalse: 'This expression unnecessarily compares a nullable boolean value to false instead of using the ?? operator to provide a default.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowComparingNullableBooleansToTrue: {
						type: 'boolean'
					},
					allowComparingNullableBooleansToFalse: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		type: 'suggestion'
	}
}