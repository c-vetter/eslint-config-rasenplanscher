export const noNegatedInLhs = {
	id: 'no-negated-in-lhs',
	key: 'no-negated-in-lhs',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow negating the left operand in `in` expressions',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-negated-in-lhs'
		},
		replacedBy: [
			'no-unsafe-negation'
		],
		deprecated: true,
		schema: [],
		messages: {
			negatedLHS: 'The ‘in’ expression's left operand is negated.'
		}
	}
}