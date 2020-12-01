export const preferRegexLiterals = {
	id: 'prefer-regex-literals',
	key: 'prefer-regex-literals',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow use of the `RegExp` constructor in favor of regular expression literals',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-regex-literals'
		},
		schema: [
			{
				type: 'object',
				properties: {
					disallowRedundantWrapping: {
						type: 'boolean',
						default: false
					}
				},
				additionalProperties: false
			}
		],
		messages: {
			unexpectedRegExp: 'Use a regular expression literal instead of the ‘RegExp’ constructor.',
			unexpectedRedundantRegExp: 'Regular expression literal is unnecessarily wrapped within a ‘RegExp’ constructor.',
			unexpectedRedundantRegExpWithFlags: 'Use regular expression literal with flags instead of the ‘RegExp’ constructor.'
		}
	}
}