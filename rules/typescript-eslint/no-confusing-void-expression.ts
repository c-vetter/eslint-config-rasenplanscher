export const typescriptEslintNoConfusingVoidExpression = {
	id: '@typescript-eslint/no-confusing-void-expression',
	key: 'no-confusing-void-expression',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Requires expressions of type void to appear in statement position',
			category: 'Best Practices',
			recommended: false,
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md'
		},
		messages: {
			invalidVoidExpr: 'Placing a void expression inside another expression is forbidden. Move it to its own statement instead.',
			invalidVoidExprWrapVoid: 'Void expressions used inside another expression must be moved to its own statement or marked explicitly with the `void` operator.',
			invalidVoidExprArrow: 'Returning a void expression from an arrow function shorthand is forbidden. Please add braces to the arrow function.',
			invalidVoidExprArrowWrapVoid: 'Void expressions returned from an arrow function shorthand must be marked explicitly with the `void` operator.',
			invalidVoidExprReturn: 'Returning a void expression from a function is forbidden. Please move it before the `return` statement.',
			invalidVoidExprReturnLast: 'Returning a void expression from a function is forbidden. Please remove the `return` statement.',
			invalidVoidExprReturnWrapVoid: 'Void expressions returned from a function must be marked explicitly with the `void` operator.',
			voidExprWrapVoid: 'Mark with an explicit `void` operator'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreArrowShorthand: {
						type: 'boolean'
					},
					ignoreVoidOperator: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		],
		type: 'problem',
		fixable: 'code'
	}
}