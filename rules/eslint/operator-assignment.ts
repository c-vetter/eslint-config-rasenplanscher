export const operatorAssignment = {
	id: 'operator-assignment',
	key: 'operator-assignment',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require or disallow assignment operator shorthand where possible',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/operator-assignment'
		},
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			}
		],
		fixable: 'code',
		messages: {
			replaced: 'Assignment can be replaced with operator assignment.',
			unexpected: 'Unexpected operator assignment shorthand.'
		}
	}
}