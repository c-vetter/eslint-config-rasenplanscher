export const restSpreadSpacing = {
	id: 'rest-spread-spacing',
	key: 'rest-spread-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce spacing between rest and spread operators and their expressions',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/rest-spread-spacing'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never'
				]
			}
		],
		messages: {
			unexpectedWhitespace: 'Unexpected whitespace after {{type}} operator.',
			expectedWhitespace: 'Expected whitespace after {{type}} operator.'
		}
	}
}