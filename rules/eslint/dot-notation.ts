export const dotNotation = {
	id: 'dot-notation',
	key: 'dot-notation',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce dot notation whenever possible',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/dot-notation'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowKeywords: {
						type: 'boolean',
						default: true
					},
					allowPattern: {
						type: 'string',
						default: ''
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			useDot: '[{{key}}] is better written in dot notation.',
			useBrackets: '.{{key}} is a syntax error.'
		}
	}
}