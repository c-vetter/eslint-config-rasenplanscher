export const reactJsxMaxDepth = {
	id: 'react/jsx-max-depth',
	key: 'jsx-max-depth',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Validate JSX maximum depth',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					max: {
						type: 'integer',
						minimum: 0
					}
				},
				additionalProperties: false
			}
		]
	}
}