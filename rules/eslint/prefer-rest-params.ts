export const preferRestParams = {
	id: 'prefer-rest-params',
	key: 'prefer-rest-params',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'require rest parameters instead of `arguments`',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-rest-params'
		},
		schema: [],
		messages: {
			preferRestParams: 'Use the rest parameters instead of ‘arguments’.'
		}
	}
}