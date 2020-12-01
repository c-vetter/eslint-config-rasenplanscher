export const preferObjectSpread = {
	id: 'prefer-object-spread',
	key: 'prefer-object-spread',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-object-spread'
		},
		schema: [],
		fixable: 'code',
		messages: {
			useSpreadMessage: 'Use an object spread instead of `Object.assign` eg: `{ ...foo }`.',
			useLiteralMessage: 'Use an object literal instead of `Object.assign`. eg: `{ foo: bar }`.'
		}
	}
}