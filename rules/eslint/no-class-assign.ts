export const noClassAssign = {
	id: 'no-class-assign',
	key: 'no-class-assign',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow reassigning class members',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-class-assign'
		},
		schema: [],
		messages: {
			class: '‘{{name}}’ is a class.'
		}
	}
}