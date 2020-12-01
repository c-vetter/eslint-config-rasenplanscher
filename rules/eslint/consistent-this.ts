export const consistentThis = {
	id: 'consistent-this',
	key: 'consistent-this',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce consistent naming when capturing the current execution context',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/consistent-this'
		},
		schema: {
			type: 'array',
			items: {
				type: 'string',
				minLength: 1
			},
			uniqueItems: true
		},
		messages: {
			aliasNotAssignedToThis: 'Designated alias ‘{{name}}’ is not assigned to ‘this’.',
			unexpectedAlias: 'Unexpected alias ‘{{name}}’ for ‘this’.'
		}
	}
}