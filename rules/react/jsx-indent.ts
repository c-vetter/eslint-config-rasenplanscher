export const reactJsxIndent = {
	id: 'react/jsx-indent',
	key: 'jsx-indent',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Validate JSX indentation',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md'
		},
		fixable: 'whitespace',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'tab'
						]
					},
					{
						type: 'integer'
					}
				]
			},
			{
				type: 'object',
				properties: {
					checkAttributes: {
						type: 'boolean'
					},
					indentLogicalExpressions: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}