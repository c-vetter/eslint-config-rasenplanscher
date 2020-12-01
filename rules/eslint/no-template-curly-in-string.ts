export const noTemplateCurlyInString = {
	id: 'no-template-curly-in-string',
	key: 'no-template-curly-in-string',
	namespace: 'eslint',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		type: 'problem',
		docs: {
			description: 'disallow template literal placeholder syntax in regular strings',
			category: 'Possible Errors',
			recommended: false,
			url: 'https://eslint.org/docs/rules/no-template-curly-in-string'
		},
		schema: [],
		messages: {
			unexpectedTemplateExpression: 'Unexpected template string expression.'
		}
	}
}