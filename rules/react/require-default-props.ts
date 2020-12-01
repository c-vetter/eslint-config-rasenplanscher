export const reactRequireDefaultProps = {
	id: 'react/require-default-props',
	key: 'require-default-props',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce a defaultProps definition for every prop that is not a required prop.',
			category: 'Best Practices',
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-default-props.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					forbidDefaultForRequired: {
						type: 'boolean'
					},
					ignoreFunctionalComponents: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}