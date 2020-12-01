export const noUnsafeNegation = {
	id: 'no-unsafe-negation',
	key: 'no-unsafe-negation',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow negating the left operand of relational operators',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-unsafe-negation',
			suggestion: true
		},
		schema: [
			{
				type: 'object',
				properties: {
					enforceForOrderingRelations: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: null,
		messages: {
			unexpected: 'Unexpected negating the left operand of ‘{{operator}}’ operator.',
			suggestNegatedExpression: 'Negate ‘{{operator}}’ expression instead of its left operand. This changes the current behavior.',
			suggestParenthesisedNegation: 'Wrap negation in ‘()’ to make the intention explicit. This preserves the current behavior.'
		}
	}
}