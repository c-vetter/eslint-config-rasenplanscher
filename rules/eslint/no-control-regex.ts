export const noControlRegex = {
	id: 'no-control-regex',
	key: 'no-control-regex',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow control characters in regular expressions',
			category: 'Possible Errors',
			recommended: true,
			url: 'https://eslint.org/docs/rules/no-control-regex'
		},
		schema: [],
		messages: {
			unexpected: 'Unexpected control character(s) in regular expression: {{controlChars}}.'
		}
	}
}