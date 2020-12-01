export const reactNoUnusedPropTypes = {
	id: 'react/no-unused-prop-types',
	key: 'no-unused-prop-types',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Prevent definitions of unused prop types',
			category: 'Best Practices',
			recommended: false,
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					customValidators: {
						type: 'array',
						items: {
							type: 'string'
						}
					},
					skipShapeProps: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}