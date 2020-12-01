export const reactJsxNoLiterals = {
	id: 'react/jsx-no-literals',
	key: 'jsx-no-literals',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent using string literals in React component definition',
			category: 'Stylistic Issues',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					noStrings: {
						type: 'boolean'
					},
					allowedStrings: {
						type: 'array',
						uniqueItems: true,
						items: {
							type: 'string'
						}
					},
					ignoreProps: {
						type: 'boolean'
					},
					noAttributeStrings: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}