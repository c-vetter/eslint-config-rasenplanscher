export const multilineCommentStyle = {
	id: 'multiline-comment-style',
	key: 'multiline-comment-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce a particular style for multiline comments',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/multiline-comment-style'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'starred-block',
					'separate-lines',
					'bare-block'
				]
			}
		],
		messages: {
			expectedBlock: 'Expected a block comment instead of consecutive line comments.',
			expectedBareBlock: 'Expected a block comment without padding stars.',
			startNewline: 'Expected a linebreak after ‘/*’.',
			endNewline: 'Expected a linebreak before ‘*/’.',
			missingStar: 'Expected a ‘*’ at the start of this line.',
			alignment: 'Expected this line to be aligned with the start of the comment.',
			expectedLines: 'Expected multiple line comments instead of a block comment.'
		}
	}
}