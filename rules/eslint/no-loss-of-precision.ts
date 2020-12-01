export const noLossOfPrecision = {
	id: 'no-loss-of-precision',
	key: 'no-loss-of-precision',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow literal numbers that lose precision',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-loss-of-precision'
		},
		schema: [],
		messages: {
			noLossOfPrecision: 'This number literal will lose precision at runtime.'
		}
	}
}