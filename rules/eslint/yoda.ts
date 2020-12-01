export const yoda = {
	id: 'yoda',
	key: 'yoda',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow “Yoda” conditions',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/yoda'
		},
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			},
			{
				type: 'object',
				properties: {
					exceptRange: {
						type: 'boolean',
						default: false
					},
					onlyEquality: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'code',
		messages: {
			expected: 'Expected literal to be on the {{expectedSide}} side of {{operator}}.'
		}
	}
}