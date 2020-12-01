export const noCondAssign = {
	id: 'no-cond-assign',
	key: 'no-cond-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow assignment operators in conditional expressions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-cond-assign'
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
			unexpected: 'Unexpected assignment within {{type}}.',
			missing: 'Expected a conditional expression and instead saw an assignment.'
		}
	}
}