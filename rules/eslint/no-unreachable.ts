export const noUnreachable = {
	id: 'no-unreachable',
	key: 'no-unreachable',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow unreachable code after `return`, `throw`, `continue`, and `break` statements',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-unreachable'
		},
		schema: [],
		messages: {
			unreachableCode: 'Unreachable code.'
		}
	}
}