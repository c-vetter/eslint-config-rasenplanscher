export const typescriptEslintBraceStyle = {
	id: '@typescript-eslint/brace-style',
	key: 'brace-style',
	namespace: '@typescript-eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'Enforce consistent brace style for blocks',
			category: 'Stylistic Issues',
			recommended: false,
			extendsBaseRule: true,
			url: 'https://github.com/typescript-eslint/typescript-eslint/blob/v4.9.0/packages/eslint-plugin/docs/rules/brace-style.md'
		},
		messages: {
			nextLineOpen: 'Opening curly brace does not appear on the same line as controlling statement.',
			sameLineOpen: 'Opening curly brace appears on the same line as controlling statement.',
			blockSameLine: 'Statement inside of curly braces should be on next line.',
			nextLineClose: 'Closing curly brace does not appear on the same line as the subsequent block.',
			singleLineClose: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block.',
			sameLineClose: 'Closing curly brace appears on the same line as the subsequent block.'
		},
		fixable: 'whitespace',
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
		]
	}
}