export const templateCurlySpacing = {
	id: 'template-curly-spacing',
	key: 'template-curly-spacing',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'require or disallow spacing around embedded expressions of template strings',
			category: 'ECMAScript 6',
			recommended: false,
			url: 'https://eslint.org/docs/rules/template-curly-spacing'
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
			expectedBefore: 'Expected space(s) before ‘}’.',
			expectedAfter: 'Expected space(s) after ‘${’.',
			unexpectedBefore: 'Unexpected space(s) before ‘}’.',
			unexpectedAfter: 'Unexpected space(s) after ‘${’.'
		}
	}
}