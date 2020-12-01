export const noReturnAssign = {
	id: 'no-return-assign',
	key: 'no-return-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow assignment operators in `return` statements',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-return-assign'
		},
		schema: [
			{
				enum: [
					'except-parens',
					'always'
				]
			}
		],
		messages: {
			returnAssignment: 'Return statement should not contain assignment.',
			arrowAssignment: 'Arrow function should not return assignment.'
		}
	}
}