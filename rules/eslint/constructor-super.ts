export const constructorSuper = {
	id: 'constructor-super',
	key: 'constructor-super',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'require `super()` calls in constructors',
			category: 'ECMAScript 6',
			recommended: true,
			url: 'https://eslint.org/docs/rules/constructor-super'
		},
		schema: [],
		messages: {
			missingSome: 'Lacked a call of ‘super()’ in some code paths.',
			missingAll: 'Expected to call ‘super()’.',
			duplicate: 'Unexpected duplicate ‘super()’.',
			badSuper: 'Unexpected ‘super()’ because ‘super’ is not a constructor.',
			unexpected: 'Unexpected ‘super()’.'
		}
	}
}