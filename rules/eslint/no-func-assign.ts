export const noFuncAssign = {
	id: 'no-func-assign',
	key: 'no-func-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow reassigning `function` declarations',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-func-assign'
		},
		schema: [],
		messages: {
			isAFunction: '‘{{name}}’ is a function.'
		}
	}
}