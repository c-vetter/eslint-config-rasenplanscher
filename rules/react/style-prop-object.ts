export const reactStylePropObject = {
	id: 'react/style-prop-object',
	key: 'style-prop-object',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce style prop value is an object',
			category: '',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allow: {
						type: 'array',
						items: {
							type: 'string'
						},
						additionalItems: false,
						uniqueItems: true
					}
				}
			}
		]
	}
}