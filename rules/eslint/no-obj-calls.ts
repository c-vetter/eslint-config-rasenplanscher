export const noObjCalls = {
	id: 'no-obj-calls',
	key: 'no-obj-calls',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow calling global object properties as functions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-obj-calls'
		},
		schema: [],
		messages: {
			unexpectedCall: '‘{{name}}’ is not a function.',
			unexpectedRefCall: '‘{{name}}’ is reference to ‘{{ref}}’, which is not a function.'
		}
	}
}