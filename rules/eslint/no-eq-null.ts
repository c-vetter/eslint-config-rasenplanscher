export const noEqNull = {
	id: 'no-eq-null',
	key: 'no-eq-null',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `null` comparisons without type-checking operators',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-eq-null'
		},
		schema: [],
		messages: {
			unexpected: 'Use ‘===’ to compare with null.'
		}
	}
}