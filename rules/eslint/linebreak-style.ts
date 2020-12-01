export const linebreakStyle = {
	id: 'linebreak-style',
	key: 'linebreak-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent linebreak style',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/linebreak-style'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'unix',
					'windows'
				]
			}
		],
		messages: {
			expectedLF: 'Expected linebreaks to be ‘LF’ but found ‘CRLF’.',
			expectedCRLF: 'Expected linebreaks to be ‘CRLF’ but found ‘LF’.'
		}
	}
}