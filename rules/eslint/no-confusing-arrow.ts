export const noConfusingArrow = {
	id: 'no-confusing-arrow',
	key: 'no-confusing-arrow',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow arrow functions where they could be confused with comparisons',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-confusing-arrow'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					allowParens: {
						type: 'boolean',
						default: true
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			confusing: 'Arrow function used ambiguously with a conditional expression.'
		}
	}
}