export const eqeqeq = {
	id: 'eqeqeq',
	key: 'eqeqeq',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require the use of `===` and `!==`',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/eqeqeq'
		},
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always'
							]
						},
						{
							type: 'object',
							properties: {
								null: {
									enum: [
										'always',
										'never',
										'ignore'
									]
								}
							},
							additionalProperties: false
						}
					],
					additionalItems: false
				},
				{
					type: 'array',
					items: [
						{
							enum: [
								'smart',
								'allow-null'
							]
						}
					],
					additionalItems: false
				}
			]
		},
		fixable: 'code',
		messages: {
			unexpected: 'Expected ‘{{expectedOperator}}’ and instead saw ‘{{actualOperator}}’.'
		}
	}
}