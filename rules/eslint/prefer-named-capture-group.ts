export const preferNamedCaptureGroup = {
	id: 'prefer-named-capture-group',
	key: 'prefer-named-capture-group',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce using named capture group in regular expression',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/prefer-named-capture-group'
		},
		schema: [],
		messages: {
			required: 'Capture group ‘{{group}}’ should be converted to a named or non-capturing group.'
		}
	}
}