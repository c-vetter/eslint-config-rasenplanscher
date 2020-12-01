export const noProto = {
	id: 'no-proto',
	key: 'no-proto',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow the use of the `__proto__` property',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-proto'
		},
		schema: [],
		messages: {
			unexpectedProto: 'The ‘__proto__’ property is deprecated.'
		}
	}
}