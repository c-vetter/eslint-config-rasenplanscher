export const reactPropTypes = {
	id: 'react/prop-types',
	key: 'prop-types',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent missing props validation in a React component definition',
			category: 'Best Practices',
			recommended: true,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					ignore: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					customValidators: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					skipUndeclared: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}