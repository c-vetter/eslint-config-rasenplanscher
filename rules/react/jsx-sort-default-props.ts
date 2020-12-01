export const reactJsxSortDefaultProps = {
	id: 'react/jsx-sort-default-props',
	key: 'jsx-sort-default-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce default props alphabetical sorting',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignoreCase: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}