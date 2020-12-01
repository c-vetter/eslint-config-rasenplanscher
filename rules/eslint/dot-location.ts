export const dotLocation = {
	id: 'dot-location',
	key: 'dot-location',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent newlines before and after dots',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/dot-location'
		},
		schema: [
			{
				enum: [
					'object',
					'property'
				]
			}
		],
		fixable: 'code',
		messages: {
			expectedDotAfterObject: 'Expected dot to be on same line as object.',
			expectedDotBeforeProperty: 'Expected dot to be on same line as property.'
		}
	}
}