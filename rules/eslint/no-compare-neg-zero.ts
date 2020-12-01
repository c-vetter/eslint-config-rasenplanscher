export const noCompareNegZero = {
	id: 'no-compare-neg-zero',
	key: 'no-compare-neg-zero',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow comparing against -0',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-compare-neg-zero'
		},
		fixable: null,
		schema: [],
		messages: {
			unexpected: 'Do not use the ‘{{operator}}’ operator to compare against -0.'
		}
	}
}