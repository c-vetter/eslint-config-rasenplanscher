export const objectPropertyNewline = {
	id: 'object-property-newline',
	key: 'object-property-newline',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'layout',
		docs: {
			description: 'enforce placing object properties on separate lines',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://eslint.org/docs/rules/object-property-newline'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowAllPropertiesOnSameLine: {
						type: 'boolean',
						default: false
					},
					allowMultiplePropertiesPerLine: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		fixable: 'whitespace',
		messages: {
			propertiesOnNewlineAll: 'Object properties must go on a new line if they aren't all on the same line.',
			propertiesOnNewline: 'Object properties must go on a new line.'
		}
	}
}