export const noUnneededTernary = {
	id: 'no-unneeded-ternary',
	key: 'no-unneeded-ternary',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow ternary operators when simpler alternatives exist',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-unneeded-ternary'
		},
		schema: [
			{
				type: 'object',
				properties: {
					defaultAssignment: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			unnecessaryConditionalExpression: 'Unnecessary use of boolean literals in conditional expression.',
			unnecessaryConditionalAssignment: 'Unnecessary use of conditional expression for default assignment.'
		}
	}
}