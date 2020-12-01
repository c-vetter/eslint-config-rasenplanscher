export const reactJsxChildElementSpacing = {
	id: 'react/jsx-child-element-spacing',
	key: 'jsx-child-element-spacing',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Ensures inline tags are not rendered without spaces between them',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md'
		},
		fixable: null,
		schema: [
			{
				type: 'object',
				properties: {},
				default: {},
				additionalProperties: false
			}
		]
	}
}