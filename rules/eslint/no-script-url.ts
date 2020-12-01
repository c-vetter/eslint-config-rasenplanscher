export const noScriptUrl = {
	id: 'no-script-url',
	key: 'no-script-url',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'suggestion',
		docs: {
			description: 'disallow `javascript:` urls',
			category: 'Best Practices',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-script-url'
		},
		schema: [],
		messages: {
			unexpectedScriptURL: 'Script URL is a form of eval.'
		}
	}
}