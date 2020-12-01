export const noSetterReturn = {
	id: 'no-setter-return',
	key: 'no-setter-return',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow returning values from setters',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-setter-return'
		},
		schema: [],
		messages: {
			returnsValue: 'Setter cannot return a value.'
		}
	}
}