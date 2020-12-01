export const reactJsxPascalCase = {
	id: 'react/jsx-pascal-case',
	key: 'jsx-pascal-case',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce PascalCase for user-defined JSX components',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowAllCaps: {
						type: 'boolean'
					},
					ignore: {
						type: 'array'
					}
				},
				additionalProperties: false
			}
		]
	}
}