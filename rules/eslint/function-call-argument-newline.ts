export const functionCallArgumentNewline = {
	id: 'function-call-argument-newline',
	key: 'function-call-argument-newline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce line breaks between arguments of a function call',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/function-call-argument-newline'
		},
		fixable: 'whitespace',
		schema: [
			{
				enum: [
					'always',
					'never',
					'consistent'
				]
			}
		],
		messages: {
			unexpectedLineBreak: 'There should be no line break here.',
			missingLineBreak: 'There should be a line break after this argument.'
		}
	}
}