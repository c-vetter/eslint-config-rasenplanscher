export const preferExponentiationOperator = {
	id: 'prefer-exponentiation-operator',
	key: 'prefer-exponentiation-operator',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `Math.pow` in favor of the `**` operator',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-exponentiation-operator'
		},
		schema: [],
		fixable: 'code',
		messages: {
			useExponentiation: 'Use the ‘**’ operator instead of ‘Math.pow’.'
		}
	}
}