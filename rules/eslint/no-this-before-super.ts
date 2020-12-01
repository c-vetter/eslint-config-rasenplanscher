export const noThisBeforeSuper = {
	id: 'no-this-before-super',
	key: 'no-this-before-super',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow `this`/`super` before calling `super()` in constructors',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-this-before-super'
		},
		schema: [],
		messages: {
			noBeforeSuper: '‘{{kind}}’ is not allowed before ‘super()’.'
		}
	}
}