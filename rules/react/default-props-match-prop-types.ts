export const reactDefaultPropsMatchPropTypes = {
	id: 'react/default-props-match-prop-types',
	key: 'default-props-match-prop-types',
	namespace: 'react',
	priority: 0,
	activate: false,
	options: [],
	meta: {
		docs: {
			description: 'Enforce all defaultProps are defined and not “required” in propTypes.',
			category: 'Best Practices',
			url: 'https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowRequiredDefaults: {
						default: false,
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	}
}