export const curly = {
	id: 'curly',
	key: 'curly',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce consistent brace style for all control statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/curly'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'all'
							]
						}
					],
					minItems: 0,
					maxItems: 1
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'multi',
								'multi-line',
								'multi-or-nest'
							]
						},
						{
							enum: [
								'consistent'
							]
						}
					],
					minItems: 0,
					maxItems: 2
				}
			]
		},
		fixable: 'code',
		messages: {
			missingCurlyAfter: 'Expected { after ‘{{name}}’.',
			missingCurlyAfterCondition: 'Expected { after ‘{{name}}’ condition.',
			unexpectedCurlyAfter: 'Unnecessary { after ‘{{name}}’.',
			unexpectedCurlyAfterCondition: 'Unnecessary { after ‘{{name}}’ condition.'
		}
	}
}