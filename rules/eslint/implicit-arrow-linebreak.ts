export const implicitArrowLinebreak = {
	id: 'implicit-arrow-linebreak',
	key: 'implicit-arrow-linebreak',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce the location of arrow function bodies',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/implicit-arrow-linebreak'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'beside',
					'below'
				]
			}
		],
		messages: {
			expected: 'Expected a linebreak before this expression.',
			unexpected: 'Expected no linebreak before this expression.'
		}
	}
}