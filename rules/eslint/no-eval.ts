export const noEval = {
	id: 'no-eval',
	key: 'no-eval',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of `eval()`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-eval'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowIndirect: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpected: 'eval can be harmful.'
		}
	}
}