export const braceStyle = {
	id: 'brace-style',
	key: 'brace-style',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce consistent brace style for blocks',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/brace-style'
		},
		schema: [
			{
				enum: [
					'1tbs',
					'stroustrup',
					'allman'
				]
			},
			{
				type: 'object',
				properties: {
					allowSingleLine: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'whitespace',
		messages: {
			nextLineOpen: 'Opening curly brace does not appear on the same line as controlling statement.',
			sameLineOpen: 'Opening curly brace appears on the same line as controlling statement.',
			blockSameLine: 'Statement inside of curly braces should be on next line.',
			nextLineClose: 'Closing curly brace does not appear on the same line as the subsequent block.',
			singleLineClose: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
			sameLineClose: 'Closing curly brace appears on the same line as the subsequent block.'
		}
	}
}