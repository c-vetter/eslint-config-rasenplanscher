export const funcStyle = {
	id: 'func-style',
	key: 'func-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce the consistent use of either `function` declarations or expressions',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/func-style'
		},
		schema: [
			{
				enum: [
					'declaration',
					'expression'
				]
			},
			{
				type: 'object',
				properties: {
					allowArrowFunctions: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			expression: 'Expected a function expression.',
			declaration: 'Expected a function declaration.'
		}
	}
}