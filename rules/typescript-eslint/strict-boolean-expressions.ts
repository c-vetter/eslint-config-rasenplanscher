export const typescriptEslintStrictBooleanExpressions = {
	id: '@typescript-eslint/strict-boolean-expressions',
	key: 'strict-boolean-expressions',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Restricts the types allowed in boolean expressions',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowString: {
						type: 'boolean'
					},
					allowNumber: {
						type: 'boolean'
					},
					allowNullableObject: {
						type: 'boolean'
					},
					allowNullableBoolean: {
						type: 'boolean'
					},
					allowNullableString: {
						type: 'boolean'
					},
					allowNullableNumber: {
						type: 'boolean'
					},
					allowAny: {
						type: 'boolean'
					},
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			conditionErrorOther: 'Unexpected value in conditional. A boolean expression is required.',
			conditionErrorAny: 'Unexpected any value in conditional. An explicit comparison or type cast is required.',
			conditionErrorNullish: 'Unexpected nullish value in conditional. The condition is always false.',
			conditionErrorNullableBoolean: 'Unexpected nullable boolean value in conditional. Please handle the nullish case explicitly.',
			conditionErrorString: 'Unexpected string value in conditional. An explicit empty string check is required.',
			conditionErrorNullableString: 'Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.',
			conditionErrorNumber: 'Unexpected number value in conditional. An explicit zero/NaN check is required.',
			conditionErrorNullableNumber: 'Unexpected nullable number value in conditional. Please handle the nullish/zero/NaN cases explicitly.',
			conditionErrorObject: 'Unexpected object value in conditional. The condition is always true.',
			conditionErrorNullableObject: 'Unexpected nullable object value in conditional. An explicit null check is required.',
			noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.'
		}
	}
}