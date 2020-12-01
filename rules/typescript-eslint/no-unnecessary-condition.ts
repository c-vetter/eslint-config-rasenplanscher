export const typescriptEslintNoUnnecessaryCondition = {
	id: '@typescript-eslint/no-unnecessary-condition',
	key: 'no-unnecessary-condition',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Prevents conditionals where the type is always truthy or always falsy',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowConstantLoopConditions: {
						type: 'boolean'
					},
					allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			alwaysTruthy: 'Unnecessary conditional, value is always truthy.',
			alwaysFalsy: 'Unnecessary conditional, value is always falsy.',
			alwaysTruthyFunc: 'This callback should return a conditional, but return is always truthy.',
			alwaysFalsyFunc: 'This callback should return a conditional, but return is always falsy.',
			neverNullish: 'Unnecessary conditional, expected left-hand side of `??` operator to be possibly null or undefined.',
			alwaysNullish: 'Unnecessary conditional, left-hand side of `??` operator is always `null` or `undefined`.',
			literalBooleanExpression: 'Unnecessary conditional, both sides of the expression are literal values',
			noOverlapBooleanExpression: 'Unnecessary conditional, the types have no overlap',
			never: 'Unnecessary conditional, value is `never`',
			neverOptionalChain: 'Unnecessary optional chain on a non-nullish value',
			noStrictNullCheck: 'This rule requires the `strictNullChecks` compiler option to be turned on to function correctly.'
		}
	}
}