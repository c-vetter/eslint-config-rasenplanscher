export const newParens = {
	id: 'new-parens',
	key: 'new-parens',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce or disallow parentheses when invoking a constructor with no arguments',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/new-parens'
		},
		fixable: 'code',
		schema: {
			anyOf: [
				{
					type: 'array',
					items: [
						{
							enum: [
								'always',
								'never'
							]
						}
					],
					minItems: 0,
					maxItems: 1
				}
			]
		},
		messages: {
			missing: 'Missing ‘()’ invoking a constructor.',
			unnecessary: 'Unnecessary ‘()’ invoking a constructor with no arguments.'
		}
	}
}