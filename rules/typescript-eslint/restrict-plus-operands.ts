export const typescriptEslintRestrictPlusOperands = {
	id: '@typescript-eslint/restrict-plus-operands',
	key: 'restrict-plus-operands',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'When adding two variables, operands must both be of type number or of type string',
			category: 'Best Practices',
			recommended: 'error',
			requiresTypeChecking: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/restrict-plus-operands.md'
		},
		messages: {
			notNumbers: 'Operands of ‘+’ operation must either be both strings or both numbers.',
			notStrings: 'Operands of ‘+’ operation must either be both strings or both numbers. Consider using a template literal.',
			notBigInts: 'Operands of ‘+’ operation must be both bigints.'
		},
		schema: [
			{
				type: 'object',
				additionalProperties: false,
				properties: {
					checkCompoundAssignments: {
						type: 'boolean'
					}
				}
			}
		]
	}
}