export const reactJsxIndentProps = {
	id: 'react/jsx-indent-props',
	key: 'jsx-indent-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Validate props indentation in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md'
		},
		fixable: 'code',
		schema: [
			{
				oneOf: [
					{
						enum: [
							'tab',
							'first'
						]
					},
					{
						type: 'integer'
					}
				]
			}
		]
	}
}