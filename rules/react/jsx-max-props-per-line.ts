export const reactJsxMaxPropsPerLine = {
	id: 'react/jsx-max-props-per-line',
	key: 'jsx-max-props-per-line',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Limit maximum of props on a single line in JSX',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md'
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					maximum: {
						type: 'integer',
						minimum: 1
					},
					when: {
						type: 'string',
						enum: [
							'always',
							'multiline'
						]
					}
				}
			}
		]
	}
}