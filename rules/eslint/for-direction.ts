export const forDirection = {
	id: 'for-direction',
	key: 'for-direction',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'enforce “for” loop update clause moving the counter in the right direction.',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/for-direction'
		},
		fixable: null,
		schema: [],
		messages: {
			incorrectDirection: 'The update clause in this loop moves the variable in the wrong direction.'
		}
	}
}